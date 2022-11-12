from django.core import validators
from django import forms
from .models import Statement


class StatementForm(forms.ModelForm):
    class Meta:
        model = Statement
        fields = ['statement']
        widgets = {
                   'statement': forms.TextInput(attrs={'class': 'form-control', 'id': 'stm'}),
                  }









