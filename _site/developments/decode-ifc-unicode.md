---
title: DECODE-IFC-UNICODE
date: 2024-01-15
description: Автоматический отчёт по валидации IFC моделей
layout: item-layout.njk
collectionName: developments
permalink: /developments/decode-ifc-unicode.html
---

# DECODE-IFC-UNICODE

https://vdobranov.github.io/DECODE-IFC-UNICODE/

Приложение для перевода IFC-шного юникода в человекочитаемый вид.  
Просто вставить текст вида «\X2\…\X0\», получить результат:

![alt text](DECODE-IFC-UNICODE.png)

Тут использовал интерфейсный фреймворк flet, который Python-оболочка над Flutter…, короче, долгая история. Поэтому грузиться может чуть дольше, чем ожидаешь от простой странички. Когда-нибудь перепишу на обычный HTML+CSS.