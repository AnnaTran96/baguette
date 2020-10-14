from django.db import models

class Baguette(models.Model):
    name = models.CharField(max_length=100)
    ingredients = models.CharField(max_length=300)
    price = models.PositiveIntegerField()
    img_src = models.CharField(max_length=400, default='')

    def __str__(self):
        return f'{self.name}: {self.ingredients} - £{self.price}'