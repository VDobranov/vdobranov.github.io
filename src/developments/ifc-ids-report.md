---
title: IFC-IDS-REPORT
layout: item-layout.njk
collectionName: developments
permalink: /developments/ifc-ids-report.html
---

# IFC-IDS-REPORT

#### https://vdobranov.github.io/IFC-IDS-REPORT/

Статическое веб-приложение для валидации IFC-файлов на соответствие требованиям IDS.

Загрузите IFC-модель и IDS-спецификацию — приложение выполнит проверку в браузере без передачи данных на сервер и сформирует отчёт в одном из поддерживаемых форматов: HTML, JSON, BCF, ODS. Вся обработка реализована через WebAssembly (Pyodide + IfcOpenShell).

![Пример работы](IFC-IDS-REPORT.png)

Приложение представляет собой браузерную оболочку над модулем IfcTester из состава ifcopenshell. Тот же функционал доступен также через командную строку, в BonsaiBIM и на ifctester.org.