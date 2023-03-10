# Generated by Django 4.1.4 on 2022-12-19 21:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("contentlist", "0008_alter_vacancy_company_size"),
    ]

    operations = [
        migrations.AlterField(
            model_name="vacancy",
            name="average_salary",
            field=models.FloatField(null=True, verbose_name="average_salary"),
        ),
        migrations.AlterField(
            model_name="vacancy",
            name="job_description",
            field=models.CharField(max_length=10000, verbose_name="Description"),
        ),
        migrations.AlterField(
            model_name="vacancy",
            name="job_title",
            field=models.CharField(max_length=100, verbose_name="Job Title"),
        ),
    ]
