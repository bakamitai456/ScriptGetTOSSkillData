var allTable = $('.db_table3');

table = allTable[0];
skillPic = '';
name = '';
element ='';
maxlevel = '';
cd = '';
sp = '';
class = '';
type = '';
req = '';
description = '';
attribute = [];

table = table.children[0];

row = [];
row = table.children;

name = row[1].children[0].children[0].innerHTML;
element = row[1].children[1].innerHTML
maxlevel = row[1].children[2].innerHTML
cd = row[1].children[3].innerHTML
sp = row[1].children[4].innerHTML

