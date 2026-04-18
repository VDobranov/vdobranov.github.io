---
title: IDS2PSET
layout: item-layout.njk
collectionName: developments
permalink: /developments/ids2pset.html
---

# IDS2PSET

#### https://vdobranov.github.io/IDS2PSET/

Приложение для формирования на основе требований IDS наборов свойств IfcPropertySetTemplate, которые потом можно скопировать в BonsaiBIM и подключать свойства к элементам модели. Чтобы руками не создавать все наборы, которые просит та или иная экспертиза.

В левой части подгружаешь свои IDS-требования, в правой части видишь собранные с них наборы свойств, жмёшь сгенерировать IFC, скачиваешь готовую IFC со всеми IfcPropertySetTemplate и IfcPropertyTemplate для каждой IDS.

![Пример работы](IDS2PSET.png)

Функционал нужно тестировать на реальных проектах, а для этого нужна огласка. Но BonsaiBIM пользуются не очень многие, поэтому есть идея, помимо шаблонных наборов свойств с IFC, формировать файл мэппинга для Revit, Tekla и проч. В первую очередь, конечно, Revit.