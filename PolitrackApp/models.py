from django.db import models


class Statement(models.Model):
    ward = models.IntegerField()
    statement = models.CharField(max_length=255)
    tags = models.CharField(max_length=255)
    category = models.CharField(max_length=255)



# Super user  -  anilk
# password - anil