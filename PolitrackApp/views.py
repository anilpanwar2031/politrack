from django.shortcuts import render, HttpResponseRedirect
from .forms import StatementForm
from django.http import JsonResponse
from .models import Statement
import re
from .datafunction import tags_category, category


def home(request):
    fm = StatementForm()
    return render(request, 'home.html', {'fm': fm})


def statement(request):
    if request.method == 'POST':
        stm = request.POST['stm']
        stm = stm.lower()

        cat = category(stm)
        print("Category ", cat)

        if cat != "":
            sug_tags = tags_category[cat]
            print("Suggested", sug_tags)
            return JsonResponse({'status': 'Save', 'st': sug_tags, 'stm': stm})
        else:
            sug_tags = ""
            return JsonResponse({'status': 'Save', 'st': sug_tags})
    return JsonResponse({'status': 'Save'})


def save_statement(request):
    if request.method == 'POST':
        stm = request.POST['stm']
        cat = category(stm)

        ward = 10
        tags = re.findall("#[a-z0-9_]+", stm.lower())
        reg = Statement(ward=ward, statement=stm, tags=tags, category=cat)
        reg.save()
        return JsonResponse({'status': 'Save'})

