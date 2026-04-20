---
title: IDS2PSET
layout: item-layout.njk
collectionName: developments
permalink: /developments/ids2pset.html
---

# IDS2PSET

#### https://vdobranov.github.io/IDS2PSET/

Веб-приложение для автоматического формирования шаблонов наборов свойств IFC на основе IDS-спецификаций.

Загрузите один или несколько IDS-файлов — приложение извлечёт из них требования к свойствам и сформирует соответствующие IfcPropertySetTemplate и IfcPropertyTemplate. Готовый IFC-файл с шаблонами можно подключить в BonsaiBIM в качестве библиотеки и использовать для наполнения модели атрибутами без ручного создания наборов. Обработка выполняется полностью в браузере через Pyodide и IfcOpenShell.

![Пример работы](IDS2PSET.png)