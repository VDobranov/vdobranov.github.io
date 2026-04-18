---
title: IFC-IDS-REPORT
date: 2024-01-15
description: Автоматический отчёт по валидации IFC моделей
layout: item-layout.njk
collectionName: developments
permalink: /developments/ifc-ids-report.html
---

# IFC-IDS-REPORT

#### https://vdobranov.github.io/IFC-IDS-REPORT/

Статическое одностраничное веб-приложение для проверки файлов IFC на соответствие спецификациям IDS.  
Подгружаешь свой IFC для проверки, подгружаешь IDS, в котором требования для проверки, запускаешь валидацию, смотришь отчёт справа, скачиваешь отчёт слева в любом доступном формате (HTML, JSON, BCF, ODS).

![Пример работы](IDS-IFC-REPORT.png)

По сути, приложение — оболочка над модулем IfcTester в библиотеке ifcopenshell. Альтернативно тем же функционалом можно воспользоваться и через командную строку, и в BonsaiBIM, и в ifctester.org.