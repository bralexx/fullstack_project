# Generated by Django 4.1.4 on 2022-12-18 20:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("contentlist", "0004_alter_vacancy_average_salary_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="vacancy",
            name="rating",
            field=models.FloatField(blank=True, null=True, verbose_name="Rating"),
        ),
    ]
