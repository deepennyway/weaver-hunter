// var storyContent = ﻿{"inkVersion":19,"root":[["^It's a cold and windy day when you set out, but at least the rain from the last week has finally stopped, leaving the air dry even if the ground is soaked through like a sponge.","\n","^Your companion is a small bat-winged lizard, which perches on your forearm in the shelter of your cloak.","\n","ev","str","^Examine the creature.","/str","/ev",{"*":"0.c-0","flg":20},{"c-0":["\n",{"->":"0.g-0"},{"#f":5}],"g-0":["^The creature is an extension of yourself that appeared recently. You have yet to give it a name, and it has yet to ask for one. Maybe some day it will feel alive enough for you to stop calling it \"it.\"","\n","^\"What a miserable day for travel,\" the creature says.","\n",["ev",{"^->":"0.g-0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"It could be worse.\"",{"->":"$r","var":true},null]}],"ev","str","^Say nothing.","/str","/ev",{"*":".^.c-2","flg":20},{"c-1":["ev",{"^->":"0.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^The creature sniffs. Sniffles? Do these things get colds? \"Agree to disagree,\" it says, and wraps its wings tighter around itself.","\n",{"->":"0.g-1"},{"#f":5}],"c-2":["\n","^You choose to hold your tongue. It's not so bad, but saying so won't change the creature's mood.","\n",{"->":"0.g-1"},{"#f":5}],"#f":5}],"g-1":["^Ahead of you, the silver mists of the Grey obscure the path forward. Somewhere out there is your quarry, yet you feel yourself drawn back toward the inn, toward the hearth and its warm fire.","\n","ev","str","^Look at the creature on your forearm. \"Stop it.\" ","/str","/ev",{"*":".^.c-3","flg":20},{"c-3":["^ You give the creature a stern look. \"Stop it.\"","\n",{"->":"0.g-2"},{"#f":5}],"#f":5}],"g-2":["^\"Sorry.\" Your companion closes its eyes, satisfied that its connection to your thoughts remains untorn. \"It's true, though, we could go back inside and wait out this mess.\"","\n",["ev",{"^->":"0.g-2.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^.\"","/str","/ev",{"*":".^.^.c-4","flg":22},{"s":["^\"Nothing to be done about that",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"0.g-2.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"^,\" you say.","\n",{"->":"0.g-3"},{"#f":5}],"#f":5}],"g-3":["^With a grunt and a squish, you step off the stones and onto the muddy road toward Plinton.","\n","ev","str","^Proceed to Plinton.","/str","/ev",{"*":".^.c-5","flg":20},{"c-5":["^ ",{"#":"CLEAR"},"\n",{"->":"Plinton"},{"->":"0.g-4"},{"#f":5}],"#f":5}],"g-4":["done",{"#f":5}]}],"done",{"Plinton":[[["^After almost a full day of walking through the mud, you arrive in Plinton. Your legs are tired, and your arms are scratched all over from your creature trying to find a comfortable riding position. You are hungry.","\n","^Then you see a Drigon!","\n",["ev",{"^->":"Plinton.0.g-0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^What's a Drigon?!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Plinton.0.g-0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},{"#f":5}],"#f":5,"#n":"g-0"}],{"g-1":["^The Drigon is a deadly dragon, with the a changed to an i. The Drigon is an evolved form of the Unnamed. So it is basically an Unnamed, just stronger and it looks different.","\n",["ev",{"^->":"Plinton.0.g-1.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^What does it look like?",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"Plinton.0.g-1.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},{"#f":5}],"#f":5}],"g-2":["^It looks like this:","\n",{"#":"IMAGE: /ink/Untitled/Drigon.png"},"end",{"#f":5}]}],{"#f":1}],"#f":1}],"listDefs":{}};
var storyContent = {{ Untitled | raw }};