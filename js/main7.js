function calc7(){
    document.getElementById("coco7").innerText = "ココフォリア出力";
    document.getElementById("saveS7").innerText = "データ保存(スマホ)";
    var str = Number(document.status7.str0.value) + Number(document.status7.str1.value);
    var con = Number(document.status7.con0.value) + Number(document.status7.con1.value);
    var pow = Number(document.status7.pow0.value) + Number(document.status7.pow1.value);
    var dex = Number(document.status7.dex0.value) + Number(document.status7.dex1.value);
    var app = Number(document.status7.app0.value) + Number(document.status7.app1.value);
    var siz = Number(document.status7.siz0.value) + Number(document.status7.siz1.value);
    var int = Number(document.status7.int0.value) + Number(document.status7.int1.value);
    var edu = Number(document.status7.edu0.value) + Number(document.status7.edu1.value);
    var luck = Number(document.status7.luck0.value) + Number(document.status7.luck1.value);
    document.status7.str2.value = str;
    document.status7.con2.value = con;
    document.status7.pow2.value = pow;
    document.status7.dex2.value = dex;
    document.status7.app2.value = app;
    document.status7.siz2.value = siz;
    document.status7.int2.value = int;
    document.status7.edu2.value = edu;
    document.status7.luck2.value = luck;

    document.status7.str3.value = Math.ceil(str/2);
    document.status7.con3.value = Math.ceil(con/2);
    document.status7.pow3.value = Math.ceil(pow/2);
    document.status7.dex3.value = Math.ceil(dex/2);
    document.status7.app3.value = Math.ceil(app/2);
    document.status7.siz3.value = Math.ceil(siz/2);
    document.status7.int3.value = Math.ceil(int/2);
    document.status7.edu3.value = Math.ceil(edu/2);

    document.status7.str4.value = Math.ceil(str/5);
    document.status7.con4.value = Math.ceil(con/5);
    document.status7.pow4.value = Math.ceil(pow/5);
    document.status7.dex4.value = Math.ceil(dex/5);
    document.status7.app4.value = Math.ceil(app/5);
    document.status7.siz4.value = Math.ceil(siz/5);
    document.status7.int4.value = Math.ceil(int/5);
    document.status7.edu4.value = Math.ceil(edu/5);

    document.status7.defbattle71.value = Math.ceil(dex/2);
    document.status7.defnegotiations73.value = edu;

    if(str > siz && dex > siz) document.status7.mov.value = 9;
    else if(str < siz && dex < siz) document.status7.mov.value = 7;
    else document.status7.mov.value = 7;

    var build = str + siz;

    if(build >= 2 && build <= 64){
        document.status7.bld.value = -2;
        document.status7.db.value = "-2";
    }else if(build >= 65 && build <= 84){
        document.status7.bld.value = -1;
        document.status7.db.value = "-1";
    }else if(build >= 85 && build <= 124){
        document.status7.bld.value = 0;
        document.status7.db.value = "0";
    }else if(build >= 125 && build <= 164){
        document.status7.bld.value = 1;
        document.status7.db.value = "+1d4";
    }else if(build >= 165 && build <= 200){
        document.status7.bld.value = 2;
        document.status7.db.value = "+1d6";
    }else{
        document.status7.bld.value = 0;
        document.status7.db.value = "ERROR";
    }

    var defstr = Number(document.status7.str0.value);
    var defcon = Number(document.status7.con0.value);
    var defpow = Number(document.status7.pow0.value);
    var defdex = Number(document.status7.dex0.value);
    var defapp = Number(document.status7.app0.value);
    var defsiz = Number(document.status7.siz0.value);
    var defint = Number(document.status7.int0.value);
    var defedu = Number(document.status7.edu0.value);
    var defluck = Number(document.status7.luck0.value);

    var defsan = defpow;
    var defidea = defint;
    var defknow = defedu;
    var defhp = Math.ceil((defcon+defsiz)/10);
    var defmp = defpow/5;

    if(document.status6.usestand.value == "true"){
        defhp *= 2;
    }
    document.status7.san0.value = defsan;
    document.status7.idea0.value = defidea;
    document.status7.luck0.value = defluck;
    document.status7.know0.value = defknow;
    document.status7.hp0.value = defhp;
    document.status7.mp0.value = defmp;

    var san = defsan + Number(document.status7.san1.value);
    var idea = defidea + Number(document.status7.idea1.value);
    var luck = defluck + Number(document.status7.luck1.value);
    var know = defknow + Number(document.status7.know1.value);
    var hp = defhp + Number(document.status7.hp1.value);
    var mp = defmp + Number(document.status7.mp1.value);
    document.status7.san2.value = san;
    document.status7.idea2.value = idea;
    document.status7.luck2.value = luck;
    document.status7.know2.value = know;
    document.status7.hp2.value = hp;
    document.status7.mp2.value = mp;

    var sp = pow*1.8;
    document.status7.maxSP.value = sp;
    var cursp = 2**Number(document.status7.power.value)
                + 2**Number(document.status7.speed.value)
                + 2**Number(document.status7.durability.value)
                + 2**Number(document.status7.range.value)
                + 2**Number(document.status7.accuracy.value);
    document.status7.curSP.value = cursp;

    var corbattlestate;
    var coractionstate;
    var abilityaccuracy;
    var dexs;
    var avoidance;
    var dbs;
    var deffences;
    var usemps;

    switch(Number(document.status7.accuracy.value)){
        case 0:
            corbattlestate = -30;
            coractionstate = -45;
            abilityaccuracy = 20;
            break;
        case 1:
            corbattlestate = -20;
            coractionstate = -30;
            abilityaccuracy = 30;
            break;
        case 2:
            corbattlestate = -10;
            coractionstate = -15;
            abilityaccuracy = 40;
            break;
        case 3:
            corbattlestate = 0;
            coractionstate = 0;
            abilityaccuracy = 60;
            break;
        case 4:
            corbattlestate = 10;
            coractionstate = 15;
            abilityaccuracy = 75;
            break;
        case 5:
            corbattlestate = 20;
            coractionstate = 30;
            abilityaccuracy = 85;
            break;
        default:
            corbattlestate = 0;
            coractionstate = 0;
            abilityaccuracy = 0;
    }

    switch(Number(document.status7.speed.value)){
        case 0:
            dexs = 0;
            avoidance = 0;
            break;
        case 1:
            dexs = 20;
            avoidance = 0;
            break;
        case 2:
            dexs = 40;
            avoidance = 15;
            break;
        case 3:
            dexs = 60;
            avoidance = 30;
            break;
        case 4:
            dexs = 80;
            avoidance = 45;
            break;
        case 5:
            dexs = 100;
            avoidance = 60;
            break;
        default:
            dexs = 20;
            avoidance = 0;
    }

    switch(Number(document.status7.power.value)){
        case 0:
            dbs = "-2d6";
            deffences = "0";
            break;
        case 1:
            dbs = "-1d6";
            deffences = "0";
            break;
        case 2:
            dbs = "0";
            deffences = "1d2";
            break;
        case 3:
            dbs = "+1d6";
            deffences = "1d4";
            break;
        case 4:
            dbs = "+2d6";
            deffences = "1d6";
            break;
        case 5:
            dbs = "+3d6";
            deffences = "1d8";
            break;
        default:
            dbs = "+1d6";
            deffences = "1d4";
    }

    switch(Number(document.status7.durability.value)){
        case 0:
            usemps = 5;
            break;
        case 1:
            usemps = 4;
            break;
        case 2:
            usemps = 3;
            break;
        case 3:
            usemps = 2;
            break;
        case 4:
            usemps = 1;
            break;
        case 5:
            usemps = 0;
            break;
        default:
            usemps = 2;
    }

    const battle = document.getElementsByClassName("corstandbattle7");
    const action = document.getElementsByClassName("corstandaction7");
    for(let i = 0; i < battle.length; i++){
        battle[i].value = corbattlestate;
    }
    for(let i = 0; i < action.length; i++){
        action[i].value = coractionstate;
    }

    document.status7.defstandabilityaction70.value = abilityaccuracy;
    document.status7.defstandabilitybattle71.value = avoidance;
    document.status7.corstandabilityaction70.value = 0;
    document.status7.corstandabilitybattle71.value = 0;
    document.status7.dbS.value = dbs;
    document.status7.deffenceS.value = deffences;
    document.status7.usempS.value = usemps;
    document.status7.dexS0.value = dexs;
    document.status7.dexS1.value = dexs/2;
    document.status7.dexS2.value = dexs/5;

    calcstatus7()
}

function calcstatus7(){
    var standabilitybattle = document.getElementById("standabilitybattle7");
    var standabilityaction = document.getElementById("standabilityaction7");
    var battle = document.getElementById("battle7");
    var search = document.getElementById("search7");
    var action = document.getElementById("action7");
    var negotiations = document.getElementById("negotiations7");
    var knowledge = document.getElementById("knowledge7");
    var etc = document.getElementById("etc7");
    
    var allbp = 0;
    var allip = 0;
    
    for(let table = 0; table < standabilitybattle.rows.length-1; table++){
        var def = Number(document.getElementsByName("defstandabilitybattle7"+table)[0].value);
        var cor = Number(document.getElementsByName("corstandabilitybattle7"+table)[0].value);
        var pl = Number(document.getElementsByName("plstandabilitybattle7"+table)[0].value);
        var add = Number(document.getElementsByName("addstandabilitybattle7"+table)[0].value);

        var sum = def+cor+pl+add;

        document.getElementsByName("tostandabilitybattle7"+table)[0].value = sum;
    }
    
    for(let table = 0; table < standabilityaction.rows.length-1; table++){
        var def = Number(document.getElementsByName("defstandabilityaction7"+table)[0].value);
        var cor = Number(document.getElementsByName("corstandabilityaction7"+table)[0].value);
        var pl = Number(document.getElementsByName("plstandabilityaction7"+table)[0].value);
        var add = Number(document.getElementsByName("addstandabilityaction7"+table)[0].value);

        var sum = def+cor+pl+add;

        document.getElementsByName("tostandabilityaction7"+table)[0].value = sum;
    }

    for(let table = 0; table < battle.rows.length-1; table++){
        var def = Number(document.getElementsByName("defbattle7"+table)[0].value);
        var bp = Number(document.getElementsByName("bpbattle7"+table)[0].value);
        var ip = Number(document.getElementsByName("ipbattle7"+table)[0].value);
        var pl = Number(document.getElementsByName("plbattle7"+table)[0].value);
        var add = Number(document.getElementsByName("addbattle7"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("tobattle7"+table)[0].value = sum;
    }

    for(let table = 0; table < search.rows.length-1; table++){
        var def = Number(document.getElementsByName("defsearch7"+table)[0].value);
        var bp = Number(document.getElementsByName("bpsearch7"+table)[0].value);
        var ip = Number(document.getElementsByName("ipsearch7"+table)[0].value);
        var pl = Number(document.getElementsByName("plsearch7"+table)[0].value);
        var add = Number(document.getElementsByName("addsearch7"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("tosearch7"+table)[0].value = sum;
    }

    for(let table = 0; table < action.rows.length-1; table++){
        var def = Number(document.getElementsByName("defaction7"+table)[0].value);
        var bp = Number(document.getElementsByName("bpaction7"+table)[0].value);
        var ip = Number(document.getElementsByName("ipaction7"+table)[0].value);
        var pl = Number(document.getElementsByName("plaction7"+table)[0].value);
        var add = Number(document.getElementsByName("addaction7"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("toaction7"+table)[0].value = sum;
    }

    for(let table = 0; table < negotiations.rows.length-1; table++){
        var def = Number(document.getElementsByName("defnegotiations7"+table)[0].value);
        var bp = Number(document.getElementsByName("bpnegotiations7"+table)[0].value);
        var ip = Number(document.getElementsByName("ipnegotiations7"+table)[0].value);
        var pl = Number(document.getElementsByName("plnegotiations7"+table)[0].value);
        var add = Number(document.getElementsByName("addnegotiations7"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("tonegotiations7"+table)[0].value = sum;
    }

    for(let table = 0; table < knowledge.rows.length-1; table++){
        var def = Number(document.getElementsByName("defknowledge7"+table)[0].value);
        var bp = Number(document.getElementsByName("bpknowledge7"+table)[0].value);
        var ip = Number(document.getElementsByName("ipknowledge7"+table)[0].value);
        var pl = Number(document.getElementsByName("plknowledge7"+table)[0].value);
        var add = Number(document.getElementsByName("addknowledge7"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("toknowledge7"+table)[0].value = sum;
    }

    for(let table = 0; table < etc.rows.length-1; table++){
        var def = Number(document.getElementsByName("defetc7"+table)[0].value);
        var bp = Number(document.getElementsByName("bpetc7"+table)[0].value);
        var ip = Number(document.getElementsByName("ipetc7"+table)[0].value);
        var pl = Number(document.getElementsByName("pletc7"+table)[0].value);
        var add = Number(document.getElementsByName("addetc7"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("toetc7"+table)[0].value = sum;
    }

    document.status7.curBP.value = allbp;
    document.status7.curIP.value = allip;
}

function randomStatus7(){
    var str = (Math.floor(Math.random() * (18 - 3) + 3))*5;
    var con = (Math.floor(Math.random() * (18 - 3) + 3))*5;
    var pow = (Math.floor(Math.random() * (18 - 3) + 3))*5;
    var dex = (Math.floor(Math.random() * (18 - 3) + 3))*5;
    var app = (Math.floor(Math.random() * (18 - 3) + 3))*5;
    var siz = (Math.floor(Math.random() * (12 - 2) + 2 + 6))*5;
    var int = (Math.floor(Math.random() * (12 - 2) + 2 + 6))*5;
    var edu = (Math.floor(Math.random() * (12 - 2) + 2 + 6))*5;
    var luck = (Math.floor(Math.random() * (18 - 3) + 3))*5;
    document.status7.str0.value = str;
    document.status7.con0.value = con;
    document.status7.pow0.value = pow;
    document.status7.dex0.value = dex;
    document.status7.app0.value = app;
    document.status7.siz0.value = siz;
    document.status7.int0.value = int;
    document.status7.edu0.value = edu;
    document.status7.luck0.value = luck;
    calc7();
}

function save7(){
    var power;
    var speed;
    var durability;
    var range;
    var accuracy;
    var growth;

    var standabilitybattle = document.getElementById("standabilitybattle7");
    var standabilityaction = document.getElementById("standabilityaction7");
    var battle = document.getElementById("battle7");
    var search = document.getElementById("search7");
    var action = document.getElementById("action7");
    var negotiations = document.getElementById("negotiations7");
    var knowledge = document.getElementById("knowledge7");
    var etc = document.getElementById("etc7");
    var items = document.getElementById("items7");

    var defpcbattlenum = defpcbattlenum7;
    var defpcsearchnum = defpcsearchnum7;
    var defpcactionnum = defpcactionnum7;
    var defpcnegotiationsnum = defpcnegotiationsnum7;
    var defpcknowledgenum = defpcknowledgenum7;
    var defstandbattlenum = defstandbattlenum7;
    var defstandactionnum = defstandactionnum7;

    var pcstatusB = "";
    var pcstatusS = "";
    var pcstatusA = "";
    var pcstatusN = "";
    var pcstatusK = "";
    var pcstatusE = "";
    var standstatusB = "";
    var standstatusA = "";

    var itemsstr = "";

    var isinitial = false;

    for(let table = 0; table < standabilitybattle.rows.length-1; table++){
        if(table < defstandbattlenum){
            
            if(standabilitybattle.rows[table+1].cells[1].innerHTML.includes("input")){
                standstatusB += standabilitybattle.rows[table+1].cells[1].innerText
                + document.getElementsByName("standabilitybattlename7"+table)[0].value + "- " 
                + document.getElementsByName("tostandabilitybattle7"+table)[0].value + "\n";
            }else{
                standstatusB += standabilitybattle.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("tostandabilitybattle7"+table)[0].value + "\n";
            }
            
            
        }else{
            standstatusB += document.getElementsByName("standabilitybattlename7"+table)[0].value + "- " 
                            + document.getElementsByName("tostandabilitybattle7"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < standabilityaction.rows.length-1; table++){
        if(table < defstandactionnum){
            if(standabilityaction.rows[table+1].cells[1].innerHTML.includes("input")){
                standstatusA += standabilityaction.rows[table+1].cells[1].innerText
                + document.getElementsByName("standabilityactionname7"+table)[0].value + "- " 
                + document.getElementsByName("tostandabilityaction7"+table)[0].value + "\n";
            }else{
                standstatusA += standabilityaction.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("tostandabilityaction7"+table)[0].value + "\n";
            }
        
        }else{
            standstatusA += document.getElementsByName("standabilityactionname7"+table)[0].value + "- " 
                            + document.getElementsByName("tostandabilityaction7"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < battle.rows.length-1; table++){
        if(document.getElementsByName("tobattle7"+table)[0].value
            == document.getElementsByName("defbattle7"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcbattlenum){
            if(battle.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusB += battle.rows[table+1].cells[1].innerText
                + document.getElementsByName("battlename7"+table)[0].value + "- " 
                + document.getElementsByName("tobattle7"+table)[0].value + "\n";
            }else{
                pcstatusB += battle.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("tobattle7"+table)[0].value + "\n";
            }
        
        }else{
            pcstatusB += document.getElementsByName("battlename7"+table)[0].value + "- " 
                            + document.getElementsByName("tobattle7"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < search.rows.length-1; table++){
        if(document.getElementsByName("tosearch7"+table)[0].value
            == document.getElementsByName("defsearch7"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcsearchnum){
            if(search.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusS += search.rows[table+1].cells[1].innerText
                + document.getElementsByName("searchname7"+table)[0].value + "- " 
                + document.getElementsByName("tosearch7"+table)[0].value + "\n";
            }else{
                pcstatusS += search.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("tosearch7"+table)[0].value + "\n";
            }
        
        }else{
            pcstatusS += document.getElementsByName("searchname7"+table)[0].value + "- " 
                            + document.getElementsByName("tosearch7"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < action.rows.length-1; table++){
        if(document.getElementsByName("toaction7"+table)[0].value
            == document.getElementsByName("defaction7"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcactionnum){
            if(action.rows[table+1].cells[1].innerHTML.includes("input")){
                
                pcstatusA += action.rows[table+1].cells[1].innerText
                + document.getElementsByName("actionname7"+table)[0].value + "- " 
                + document.getElementsByName("toaction7"+table)[0].value + "\n";
            }else{
                pcstatusA += action.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("toaction7"+table)[0].value + "\n";
            }
        
        }else{
            pcstatusA += document.getElementsByName("actionname7"+table)[0].value + "- " 
                            + document.getElementsByName("toaction7"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < negotiations.rows.length-1; table++){
        if(document.getElementsByName("tonegotiations7"+table)[0].value
            == document.getElementsByName("defnegotiations7"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcnegotiationsnum){
            if(negotiations.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusN += negotiations.rows[table+1].cells[1].innerText
                + document.getElementsByName("negotiationsname7"+table)[0].value + "- " 
                + document.getElementsByName("tonegotiations7"+table)[0].value + "\n";
            }else{
                pcstatusN += negotiations.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("tonegotiations7"+table)[0].value + "\n";
            }
        
        }else{
            pcstatusN += document.getElementsByName("negotiationsname7"+table)[0].value + "- " 
                            + document.getElementsByName("tonegotiations7"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < knowledge.rows.length-1; table++){
        if(document.getElementsByName("toknowledge7"+table)[0].value
            == document.getElementsByName("defknowledge7"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcknowledgenum){
            if(knowledge.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusK += knowledge.rows[table+1].cells[1].innerText
                + document.getElementsByName("knowledgename7"+table)[0].value + "- " 
                + document.getElementsByName("toknowledge7"+table)[0].value + "\n";
            }else{
                pcstatusK += knowledge.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("toknowledge7"+table)[0].value + "\n";
            }
        
        }else{
            pcstatusK += document.getElementsByName("knowledgename7"+table)[0].value + "- " 
                            + document.getElementsByName("toknowledge7"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < etc.rows.length-1; table++){
        if(document.getElementsByName("toetc7"+table)[0].value
            == document.getElementsByName("defetc7"+table)[0].value) isinitial = true;
            else isinitial = false;
       {
            pcstatusE += document.getElementsByName("etcname7"+table)[0].value + "- " 
                            + document.getElementsByName("toetc7"+table)[0].value + "\n";
        }
        
    }
    for(let table = 0; table < items.rows.length-1; table++){
        itemsstr += document.getElementsByName("itemsname7"+table)[0].value + " " 
                    + document.getElementsByName("itemsnum7"+table)[0].value + "\n"
                    + document.getElementsByName("itemsdetail7"+table)[0].value + "\n";
    
    }

    switch(Number(document.status7.power.value)){
        case 0:
            power = "なし";
            break;
        case 1:
            power = "E";
            break;
        case 2:
            power = "D";
            
            break;
        case 3:
            power = "C";
            
            break;
        case 4:
            power = "B";
            
            break;
        case 5:
            power = "A";
            
            break;
        default:
            power = "E";
            
    }

    switch(Number(document.status7.speed.value)){
        case 0:
            speed = "なし";
            break;
        case 1:
            speed = "E";
            break;
        case 2:
            speed = "D";
            
            break;
        case 3:
            speed = "C";
            
            break;
        case 4:
            speed = "B";
            
            break;
        case 5:
            speed = "A";
            
            break;
        default:
            speed = "E";
            
    }

    switch(Number(document.status7.durability.value)){
        case 0:
            durability = "なし";
            break;
        case 1:
            durability = "E";
            break;
        case 2:
            durability = "D";
            
            break;
        case 3:
            durability = "C";
            
            break;
        case 4:
            durability = "B";
            
            break;
        case 5:
            durability = "A";
            
            break;
        default:
            durability = "E";
            
    }

    switch(Number(document.status7.range.value)){
        case 0:
            range = "なし";
            break;
        case 1:
            range = "E";
            break;
        case 2:
            range = "D";
            
            break;
        case 3:
            range = "C";
            
            break;
        case 4:
            range = "B";
            
            break;
        case 5:
            range = "A";
            
            break;
        default:
            range = "E";
            
    }

    switch(Number(document.status7.accuracy.value)){
        case 0:
            accuracy = "なし";
            break;
        case 1:
            accuracy = "E";
            break;
        case 2:
            accuracy = "D";
            
            break;
        case 3:
            accuracy = "C";
            
            break;
        case 4:
            accuracy = "B";
            
            break;
        case 5:
            accuracy = "A";
            
            break;
        default:
            accuracy = "E";
            
    }

    switch(Number(document.status7.growth.value)){
        case 0:
            growth = "なし";
            break;
        case 1:
            growth = "E";
            break;
        case 2:
            growth = "D";
            
            break;
        case 3:
            growth = "C";
            
            break;
        case 4:
            growth = "B";
            
            break;
        case 5:
            growth = "A";
            
            break;
        default:
            growth = "E";
            
    }

    var usestand = "";
    var isstandstr = false;
    if(document.status7.usestand.value == "true"){
        usestand = "(スタンド使い)";
        isstandstr = true;
    }else{
        usestand = "";
        isstandstr = false;
    }

    var pcstr = "【名前】" + document.status7.charaname.value + " " + usestand + "　【性別】" + document.status7.sex.value + "\n"
                + "【年齢】" + document.status7.age.value + "歳　【身長】" + document.status7.stature.value + "cm　【体重】" + document.status7.weight.value + "kg\n"
                + "【出身】" + document.status7.from.value + "\n"
                + "【髪の色】" + document.status7.heir.value + "　【瞳の色】" + document.status7.eye.value + "　【肌の色】" + document.status7.skin.value + "\n"
                + "【職業(配属先)】" + document.status7.business.value + "\n"
                + "【ステータス】\n"
                + "STR- " + document.status7.str2.value + "　HA-STR- " + document.status7.str3.value + "　EX-STR- " + document.status7.str4.value + "\n"
                + "CON- " + document.status7.con2.value + "　HA-CON- " + document.status7.con3.value + "　EX-CON- " + document.status7.con4.value + "\n"
                + "POW- " + document.status7.pow2.value + "　HA-POW- " + document.status7.pow3.value + "　EX-POW- " + document.status7.pow4.value + "\n"
                + "DEX- " + document.status7.dex2.value + "　HA-DEX- " + document.status7.dex3.value + "　EX-DEX- " + document.status7.dex4.value + "\n"
                + "APP- " + document.status7.app2.value + "　HA-APP- " + document.status7.app3.value + "　EX-APP- " + document.status7.app4.value + "\n"
                + "SIZ- " + document.status7.siz2.value + "　HA-SIZ- " + document.status7.siz3.value + "　EX-SIZ- " + document.status7.siz4.value + "\n"
                + "INT- " + document.status7.int2.value + "　HA-INT- " + document.status7.int3.value + "　EX-INT- " + document.status7.int4.value + "\n"
                + "EDU- " + document.status7.edu2.value + "　HA-EDU- " + document.status7.edu3.value + "　EX-EDU- " + document.status7.edu4.value + "\n"
                + "LUK- " + document.status7.luck2.value + "\n"
                + "SAN- " + document.status7.san2.value + "\n"
                + "IDA- " + document.status7.idea2.value + "\n"
                + "KNOW- " + document.status7.know2.value + "\n"
                + "HP- " + document.status7.hp2.value + "\n"
                + "MP- " + document.status7.mp2.value + "\n"
                + "ダメージボーナス- " + document.status7.db.value + "\n"
                + "MOV- " + document.status7.mov.value + "\n"
                + "ビルド- " + document.status7.bld.value + "\n"
                + "【詳細】\n"
                + document.status7.charadetail.value + "\n"
                + "【所持品】\n"
                + itemsstr + "\n"
                + "【技能】\n"
                + "『戦闘技能』\n"
                + pcstatusB + "\n"
                + "『探索技能』\n"
                + pcstatusS + "\n"
                + "『行動技能』\n"
                + pcstatusA + "\n"
                + "『交渉技能』\n"
                + pcstatusN + "\n"
                + "『知識技能』\n"
                + pcstatusK + "\n"
                + "『その他の技能』\n"
                + pcstatusE + "\n";

    var standstr = "【スタンド名】" + document.status7.standname.value + "\n"
                + "【パラメータ】\n"
                + "破壊力-" + power + "　スピード-" + speed + "　持続力-" + durability + "\n"
                + "射程距離-" + range + "　精密動作性-" + accuracy + "　成長性-" + growth + "\n"
                + "TRPG的DEX-" + document.status7.dexS0.value + "\n"
                + "TRPG的HA-DEX-" + document.status7.dexS1.value + "\n"
                + "TRPG的EX-DEX-" + document.status7.dexS2.value + "\n"
                + "ダメージボーナス- " + document.status7.dbS.value + "\n"
                + "防御可能量-" + document.status7.deffenceS.value + "\n"
                + "\n"
                + "【スタンド詳細】\n"
                + document.status7.standdetail.value + "\n"
                + "【技能】\n"
                + "『戦闘技能』\n"
                + standstatusB + "\n"
                + "『行動技能』\n"
                + standstatusA + "\n";

    var str = "";
    if(isstandstr){
        str = pcstr + "\n" + standstr;
    }else{
        str = pcstr;
    }
    let ary = str.split('');
    let blob = new Blob(ary,{type:"text/plan"});
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    //link.download = "test.txt";
    link.download = document.status7.charaname.value+"7版.txt";
    link.click();
}

function chapare7(){
    var standabilitybattle = document.getElementById("standabilitybattle7");
    var standabilityaction = document.getElementById("standabilityaction7");
    var battle = document.getElementById("battle7");
    var search = document.getElementById("search7");
    var action = document.getElementById("action7");
    var negotiations = document.getElementById("negotiations7");
    var knowledge = document.getElementById("knowledge7");
    var etc = document.getElementById("etc7");

    var defpcbattlenum = defpcbattlenum7;
    var defpcsearchnum = defpcsearchnum7;
    var defpcactionnum = defpcactionnum7;
    var defpcnegotiationsnum = defpcnegotiationsnum7;
    var defpcknowledgenum = defpcknowledgenum7;
    var defstandbattlenum = defstandbattlenum7;
    var defstandactionnum = defstandactionnum7;

    var pcstatusB = "";
    var pcstatusS = "";
    var pcstatusA = "";
    var pcstatusN = "";
    var pcstatusK = "";
    var pcstatusE = "";
    var standstatusB = "";
    var standstatusA = "";

    var pcstr = "";

    var isstandstr = false;
    if(document.status7.usestand.value == "true"){
        isstandstr = true;
    }else{
        isstandstr = false;
    }

    for(let table = 0; table < standabilitybattle.rows.length-1; table++){
        if(table < defstandbattlenum){
            if(standabilitybattle.rows[table+1].cells[1].innerHTML.includes("input")){
                standstatusB += "CCB<=" + document.getElementsByName("tostandabilitybattle7"+table)[0].value + " 【" 
                                + standabilitybattle.rows[table+1].cells[1].innerText
                                + document.getElementsByName("standabilitybattlename7"+table)[0].value + "】\n";
            }else{
                standstatusB += "CCB<=" + document.getElementsByName("tostandabilitybattle7"+table)[0].value + " 【" 
                                + standabilitybattle.rows[table+1].cells[1].innerText + "】\n";
            }
            
            
        }else{
            standstatusB += "CCB<=" + document.getElementsByName("tostandabilitybattle7"+table)[0].value + " 【" 
            + document.getElementsByName("standabilitybattlename7"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < standabilityaction.rows.length-1; table++){
        if(table < defstandactionnum){
            if(standabilityaction.rows[table+1].cells[1].innerHTML.includes("input")){
                standstatusA += "CCB<=" + document.getElementsByName("tostandabilityaction7"+table)[0].value + " 【" 
                                + standabilityaction.rows[table+1].cells[1].innerText
                                + document.getElementsByName("standabilityactionname7"+table)[0].value + "】\n";
            }else{
                standstatusA += "CCB<=" + document.getElementsByName("tostandabilityaction7"+table)[0].value + " 【" 
                                + standabilityaction.rows[table+1].cells[1].innerText + "】\n";
            }
            
            
        }else{
            standstatusA += "CCB<=" + document.getElementsByName("tostandabilityaction7"+table)[0].value + " 【" 
            + document.getElementsByName("standabilityactionname7"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < battle.rows.length-1; table++){
        if(table < defpcbattlenum){
            if(battle.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusB += "CCB<=" + document.getElementsByName("tobattle7"+table)[0].value + " 【"
                            + battle.rows[table+1].cells[1].innerText
                            + document.getElementsByName("battlename7"+table)[0].value + "】\n";
            }else{
                pcstatusB += "CCB<=" + document.getElementsByName("tobattle7"+table)[0].value + " 【"
                            + battle.rows[table+1].cells[1].innerText + "】\n";
            }
        
        }else{
            pcstatusB += "CCB<=" + document.getElementsByName("tobattle7"+table)[0].value + " 【"
            + document.getElementsByName("battlename7"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < search.rows.length-1; table++){
        if(table < defpcsearchnum){
            if(search.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusS += "CCB<=" + document.getElementsByName("tosearch7"+table)[0].value + " 【"
                            + search.rows[table+1].cells[1].innerText
                            + document.getElementsByName("searchname7"+table)[0].value + "】\n";
            }else{
                pcstatusS += "CCB<=" + document.getElementsByName("tosearch7"+table)[0].value + " 【"
                            + search.rows[table+1].cells[1].innerText + "】\n";
            }
        
        }else{
            pcstatusS += "CCB<=" + document.getElementsByName("tosearch7"+table)[0].value + " 【"
            + document.getElementsByName("searchname7"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < action.rows.length-1; table++){
        if(table < defpcactionnum){
            if(action.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusA += "CCB<=" + document.getElementsByName("toaction7"+table)[0].value + " 【"
                            + action.rows[table+1].cells[1].innerText
                            + document.getElementsByName("actionname7"+table)[0].value + "】\n";
            }else{
                pcstatusA += "CCB<=" + document.getElementsByName("toaction7"+table)[0].value + " 【"
                            + action.rows[table+1].cells[1].innerText + "】\n";
            }
        
        }else{
            pcstatusA += "CCB<=" + document.getElementsByName("toaction7"+table)[0].value + " 【"
            + document.getElementsByName("actionname7"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < negotiations.rows.length-1; table++){
        if(table < defpcnegotiationsnum){
            if(negotiations.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusN += "CCB<=" + document.getElementsByName("tonegotiations7"+table)[0].value + " 【"
                            + negotiations.rows[table+1].cells[1].innerText
                            + document.getElementsByName("negotiationsname7"+table)[0].value + "】\n";
            }else{
                pcstatusN += "CCB<=" + document.getElementsByName("tonegotiations7"+table)[0].value + " 【"
                            + negotiations.rows[table+1].cells[1].innerText + "】\n";
            }
        
        }else{
            pcstatusN += "CCB<=" + document.getElementsByName("tonegotiations7"+table)[0].value + " 【"
            + document.getElementsByName("negotiationsname7"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < knowledge.rows.length-1; table++){
        if(table < defpcknowledgenum){
            if(knowledge.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusK += "CCB<=" + document.getElementsByName("toknowledge7"+table)[0].value + " 【"
                            + knowledge.rows[table+1].cells[1].innerText
                            + document.getElementsByName("knowledgename7"+table)[0].value + "】\n";
            }else{
                pcstatusK += "CCB<=" + document.getElementsByName("toknowledge7"+table)[0].value + " 【"
                            + knowledge.rows[table+1].cells[1].innerText + "】\n";
            }
        
        }else{
            pcstatusK += "CCB<=" + document.getElementsByName("toknowledge7"+table)[0].value + " 【"
            + document.getElementsByName("knowledgename7"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < etc.rows.length-1; table++){
        
        pcstatusE += "CCB<=" + document.getElementsByName("toetc7"+table)[0].value + " 【"
        + document.getElementsByName("etcname7"+table)[0].value + "】\n";
        
    }

    var statusdice = "";

    statusdice += "CCB<={SAN} 【SANC】\n"
                + "CCB<="+document.status7.idea2.value+" 【アイデア】\n"
                + "CCB<="+document.status7.luck2.value+" 【幸運】\n"
                + "CCB<="+document.status7.know2.value+" 【知識】\n"

    pcstr += "ステータス技能\n"
            + statusdice + "---------------------\n"
            + "PC技能\n"
            + "『戦闘技能』\n"
            + pcstatusB + "---------------------\n"
            + "『探索技能』\n"
            + pcstatusS + "---------------------\n"
            + "『行動技能』\n"
            + pcstatusA + "---------------------\n"
            + "『交渉技能』\n"
            + pcstatusN + "---------------------\n"
            + "『知識技能』\n"
            + pcstatusK + "---------------------\n"
            + "『その他の技能』\n"
            + pcstatusE + "---------------------\n\n"

    if(isstandstr){
        pcstr += "スタンド技能\n"
                + "『戦闘技能』\n"
                + standstatusB + "---------------------\n"
                + "『行動技能』\n"
                + standstatusA + "---------------------\n";
    }

    const sheet = {
        kind: "character",
        data:{
            name:"空条承太郎",
            initiative: 75,
            externalUrl: "https://fanofjotaro.github.io/jojos.bizarre.table.game/",
            iconUrl: "",
            commands: "",
            status: [
                {
                    label:"HP",
                    value:0,
                    max:0
                },
                {
                    label:"MP",
                    value:0,
                    max:0
                },
                {
                    label:"SAN",
                    value:0,
                    max:0
                }
            ],
            parameter: [
                {
                    label:"アイデア",
                    value:0
                },
                {
                    label:"幸運",
                    value:0
                },
                {
                    label:"知識",
                    value:0
                }
            ]
        }
    }
    
    sheet.data.name = document.status7.charaname.value;
    sheet.data.initiative = Number(document.status7.dex2.value);
    sheet.data.commands = pcstr;

    sheet.data.status[0].value = Number(document.status7.hp2.value);
    sheet.data.status[0].max = Number(document.status7.hp2.value);
    sheet.data.status[1].value = Number(document.status7.mp2.value);
    sheet.data.status[1].max = Number(document.status7.mp2.value);
    sheet.data.status[2].value = Number(document.status7.san2.value);
    sheet.data.status[2].max = Number(document.status7.san2.value);

    sheet.data.parameter[0].value = Number(document.status7.idea2.value);
    sheet.data.parameter[1].value = Number(document.status7.luck2.value);
    sheet.data.parameter[2].value = Number(document.status7.know2.value);

    const data = JSON.stringify(sheet);
    navigator.clipboard.writeText(data);
    document.getElementById("coco7").innerText = "クリップボードにコピー済み";
    
    /*
    let ary = pcstr.split('');
    let blob = new Blob(ary,{type:"text/plan"});
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    //link.download = "test.txt";
    link.download = document.status7.charaname.value + "のチャパレ7版.txt";
    link.click();
    */
}

function savepage7(type){
    const sheet = {
        version: "2.0.1",
        url: "https://fanofjotaro.github.io/jojos.bizarre.table.game/",
        pcdetail: {
            name: "names",
            usestand: true,
            sex: "man",
            age: 20,
            stature: 175,
            weight: 65,
            from: "日本",
            heir: "黒",
            eye: "橙",
            skin: "薄橙",
            business: "会社員",
            detail: "見本"
        },
        standdetail: {
            name: "names",
            detail: "見本"
        },
        items: [],
        pcstatus: {
            str: [0, 0, 0, 0, 0],
            con: [0, 0, 0, 0, 0],
            pow: [0, 0, 0, 0, 0],
            dex: [0, 0, 0, 0, 0],
            app: [0, 0, 0, 0, 0],
            siz: [0, 0, 0, 0, 0],
            int: [0, 0, 0, 0, 0],
            edu: [0, 0, 0, 0, 0],
            luck: [0, 0, 0],
            san: [0, 0, 0],
            idea: [0, 0, 0],
            know: [0, 0, 0],
            hp: [0, 0, 0],
            mp: [0, 0, 0],
            db: "0",
            mov: "0",
            bld: "0",
            bp: [0, 0],
            ip: [0, 0],
            sp: [0, 0],
            battle: [],
            search: [],
            action: [],
            negotiations: [],
            knowledge: [],
            etc: []
        },
        standstatus: {
            parameter: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            db: "-2d6",
            deffence: "0",
            mpcost: 5,
            battle: [],
            action: []
        },
    };
    
    
    
    sheet.pcdetail.name = document.status7.charaname.value;
    sheet.pcdetail.usestand = document.status7.usestand.value;
    sheet.pcdetail.sex = document.status7.sex.value;
    sheet.pcdetail.age = Number(document.status7.age.value);
    sheet.pcdetail.stature = Number(document.status7.stature.value);
    sheet.pcdetail.weight = Number(document.status7.weight.value);
    sheet.pcdetail.from = document.status7.from.value;
    sheet.pcdetail.heir = document.status7.heir.value;
    sheet.pcdetail.eye = document.status7.eye.value;
    sheet.pcdetail.skin = document.status7.skin.value;
    sheet.pcdetail.business = document.status7.business.value;
    sheet.pcdetail.detail = document.status7.charadetail.value;

    sheet.standdetail.name = document.status7.standname.value;
    sheet.standdetail.detail = document.status7.standdetail.value;

    sheet.pcstatus.str[0] = Number(document.status7.str0.value);
    sheet.pcstatus.str[1] = Number(document.status7.str1.value);
    sheet.pcstatus.str[2] = Number(document.status7.str2.value);
    sheet.pcstatus.str[3] = Number(document.status7.str3.value);
    sheet.pcstatus.str[4] = Number(document.status7.str4.value);
    sheet.pcstatus.con[0] = Number(document.status7.con0.value);
    sheet.pcstatus.con[1] = Number(document.status7.con1.value);
    sheet.pcstatus.con[2] = Number(document.status7.con2.value);
    sheet.pcstatus.con[3] = Number(document.status7.con3.value);
    sheet.pcstatus.con[4] = Number(document.status7.con4.value);
    sheet.pcstatus.pow[0] = Number(document.status7.pow0.value);
    sheet.pcstatus.pow[1] = Number(document.status7.pow1.value);
    sheet.pcstatus.pow[2] = Number(document.status7.pow2.value);
    sheet.pcstatus.pow[3] = Number(document.status7.pow3.value);
    sheet.pcstatus.pow[4] = Number(document.status7.pow4.value);
    sheet.pcstatus.dex[0] = Number(document.status7.dex0.value);
    sheet.pcstatus.dex[1] = Number(document.status7.dex1.value);
    sheet.pcstatus.dex[2] = Number(document.status7.dex2.value);
    sheet.pcstatus.dex[3] = Number(document.status7.dex3.value);
    sheet.pcstatus.dex[4] = Number(document.status7.dex4.value);
    sheet.pcstatus.app[0] = Number(document.status7.app0.value);
    sheet.pcstatus.app[1] = Number(document.status7.app1.value);
    sheet.pcstatus.app[2] = Number(document.status7.app2.value);
    sheet.pcstatus.app[3] = Number(document.status7.app3.value);
    sheet.pcstatus.app[4] = Number(document.status7.app4.value);
    sheet.pcstatus.siz[0] = Number(document.status7.siz0.value);
    sheet.pcstatus.siz[1] = Number(document.status7.siz1.value);
    sheet.pcstatus.siz[2] = Number(document.status7.siz2.value);
    sheet.pcstatus.siz[3] = Number(document.status7.siz3.value);
    sheet.pcstatus.siz[4] = Number(document.status7.siz4.value);
    sheet.pcstatus.int[0] = Number(document.status7.int0.value);
    sheet.pcstatus.int[1] = Number(document.status7.int1.value);
    sheet.pcstatus.int[2] = Number(document.status7.int2.value);
    sheet.pcstatus.int[3] = Number(document.status7.int3.value);
    sheet.pcstatus.int[4] = Number(document.status7.int4.value);
    sheet.pcstatus.edu[0] = Number(document.status7.edu0.value);
    sheet.pcstatus.edu[1] = Number(document.status7.edu1.value);
    sheet.pcstatus.edu[2] = Number(document.status7.edu2.value);
    sheet.pcstatus.edu[3] = Number(document.status7.edu3.value);
    sheet.pcstatus.edu[4] = Number(document.status7.edu4.value);
    sheet.pcstatus.hp[0] = Number(document.status7.hp0.value);
    sheet.pcstatus.hp[1] = Number(document.status7.hp1.value);
    sheet.pcstatus.hp[2] = Number(document.status7.hp2.value);
    sheet.pcstatus.mp[0] = Number(document.status7.mp0.value);
    sheet.pcstatus.mp[1] = Number(document.status7.mp1.value);
    sheet.pcstatus.mp[2] = Number(document.status7.mp2.value);
    sheet.pcstatus.san[0] = Number(document.status7.san0.value);
    sheet.pcstatus.san[1] = Number(document.status7.san1.value);
    sheet.pcstatus.san[2] = Number(document.status7.san2.value);
    sheet.pcstatus.idea[0] = Number(document.status7.idea0.value);
    sheet.pcstatus.idea[1] = Number(document.status7.idea1.value);
    sheet.pcstatus.idea[2] = Number(document.status7.idea2.value);
    sheet.pcstatus.luck[0] = Number(document.status7.luck0.value);
    sheet.pcstatus.luck[1] = Number(document.status7.luck1.value);
    sheet.pcstatus.luck[2] = Number(document.status7.luck2.value);
    sheet.pcstatus.know[0] = Number(document.status7.know0.value);
    sheet.pcstatus.know[1] = Number(document.status7.know1.value);
    sheet.pcstatus.know[2] = Number(document.status7.know2.value);

    sheet.pcstatus.db = document.status7.db.value;
    sheet.pcstatus.mov = Number(document.status7.mov.value);
    sheet.pcstatus.bld = Number(document.status7.bld.value);
    sheet.pcstatus.bp[0] = Number(document.status7.curBP.value);
    sheet.pcstatus.bp[1] = Number(document.status7.maxBP.value);
    sheet.pcstatus.ip[0] = Number(document.status7.curIP.value);
    sheet.pcstatus.ip[1] = Number(document.status7.maxIP.value);
    sheet.pcstatus.sp[0] = Number(document.status7.curSP.value);
    sheet.pcstatus.sp[1] = Number(document.status7.maxSP.value);

    sheet.standstatus.parameter[0] = Number(document.status7.power.value);
    sheet.standstatus.parameter[1] = Number(document.status7.speed.value);
    sheet.standstatus.parameter[2] = Number(document.status7.durability.value);
    sheet.standstatus.parameter[3] = Number(document.status7.range.value);
    sheet.standstatus.parameter[4] = Number(document.status7.accuracy.value);
    sheet.standstatus.parameter[5] = Number(document.status7.growth.value);
    sheet.standstatus.parameter[6] = Number(document.status7.dexS0.value);
    sheet.standstatus.parameter[7] = Number(document.status7.dexS1.value);
    sheet.standstatus.parameter[8] = Number(document.status7.dexS2.value);
    sheet.standstatus.db =           document.status7.dbS.value;
    sheet.standstatus.deffence =     document.status7.deffenceS.value;
    sheet.standstatus.mpcost =       Number(document.status7.usempS.value);

    var standabilitybattle = document.getElementById("standabilitybattle7");
    var standabilityaction = document.getElementById("standabilityaction7");
    var battle = document.getElementById("battle7");
    var search = document.getElementById("search7");
    var action = document.getElementById("action7");
    var negotiations = document.getElementById("negotiations7");
    var knowledge = document.getElementById("knowledge7");
    var etc = document.getElementById("etc7");
    var items = document.getElementById("items7");

    var defpcbattlenum = defpcbattlenum7;
    var defpcsearchnum = defpcsearchnum7;
    var defpcactionnum = defpcactionnum7;
    var defpcnegotiationsnum = defpcnegotiationsnum7;
    var defpcknowledgenum = defpcknowledgenum7;
    var defstandbattlenum = defstandbattlenum7;
    var defstandactionnum = defstandactionnum7;

    for(let table = 0; table < standabilitybattle.rows.length-1; table++){
        let standstatus = {
            isinput: false,
            growth: false,
            name: "技能名",
            inputname: "()",
            num: [0, 0, 0, 0, 0]
        }
        standstatus.growth = document.getElementsByName("chstandabilitybattle7"+table)[0].checked;
        if(table < defstandbattlenum){
            standstatus.name = standabilitybattle.rows[table+1].cells[1].innerText;
            if(standabilitybattle.rows[table+1].cells[1].innerHTML.includes("input")){
                standstatus.isinput = true;
                standstatus.inputname = document.getElementsByName("standabilitybattlename7"+table)[0].value;
            }else{
                standstatus.isinput = false;
                standstatus.inputname = "";
            }
            
        }else{
            standstatus.name = document.getElementsByName("standabilitybattlename7"+table)[0].value;
            standstatus.isinput = false;
            standstatus.inputname = "";
        }
        standstatus.num[0] = Number(document.getElementsByName("defstandabilitybattle7"+table)[0].value);
        standstatus.num[1] = Number(document.getElementsByName("corstandabilitybattle7"+table)[0].value);
        standstatus.num[2] = Number(document.getElementsByName("plstandabilitybattle7"+table)[0].value);
        standstatus.num[3] = Number(document.getElementsByName("addstandabilitybattle7"+table)[0].value);
        standstatus.num[4] = Number(document.getElementsByName("tostandabilitybattle7"+table)[0].value);
        sheet.standstatus.battle.push(standstatus);
    }
    for(let table = 0; table < standabilityaction.rows.length-1; table++){
        let standstatus = {
            isinput: false,
            growth: false,
            name: "技能名",
            inputname: "()",
            num: [0, 0, 0, 0, 0]
        }
        standstatus.growth = document.getElementsByName("chstandabilityaction7"+table)[0].checked;
        if(table < defstandactionnum){
            standstatus.name = standabilityaction.rows[table+1].cells[1].innerText;
            if(standabilityaction.rows[table+1].cells[1].innerHTML.includes("input")){
                standstatus.isinput = true;
                standstatus.inputname = document.getElementsByName("standabilityactionname7"+table)[0].value;
            }else{
                standstatus.isinput = false;
                standstatus.inputname = "";
            }
            
        }else{
            standstatus.name = document.getElementsByName("standabilityactionname7"+table)[0].value;
            standstatus.isinput = false;
            standstatus.inputname = "";
        }
        standstatus.num[0] = Number(document.getElementsByName("defstandabilityaction7"+table)[0].value);
        standstatus.num[1] = Number(document.getElementsByName("corstandabilityaction7"+table)[0].value);
        standstatus.num[2] = Number(document.getElementsByName("plstandabilityaction7"+table)[0].value);
        standstatus.num[3] = Number(document.getElementsByName("addstandabilityaction7"+table)[0].value);
        standstatus.num[4] = Number(document.getElementsByName("tostandabilityaction7"+table)[0].value);
        sheet.standstatus.action.push(standstatus);
    }
    for(let table = 0; table < battle.rows.length-1; table++){
        let pcstatus = {
            isinput: false,
            growth: false,
            name: "技能名",
            inputname: "()",
            num: [0, 0, 0, 0, 0, 0]
        }
        pcstatus.growth = document.getElementsByName("chbattle7"+table)[0].checked;
        if(table < defpcbattlenum){
            pcstatus.name = battle.rows[table+1].cells[1].innerText;
            if(battle.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatus.isinput = true;
                pcstatus.inputname = document.getElementsByName("battlename7"+table)[0].value;
            }else{
                pcstatus.isinput = false;
                pcstatus.inputname = "";
            }
        
        }else{
            pcstatus.name = document.getElementsByName("battlename7"+table)[0].value;
            pcstatus.isinput = false;
            pcstatus.inputname = "";
        }
        pcstatus.num[0] = Number(document.getElementsByName("defbattle7"+table)[0].value);
        pcstatus.num[1] = Number(document.getElementsByName("bpbattle7"+table)[0].value);
        pcstatus.num[2] = Number(document.getElementsByName("ipbattle7"+table)[0].value);
        pcstatus.num[3] = Number(document.getElementsByName("plbattle7"+table)[0].value);
        pcstatus.num[4] = Number(document.getElementsByName("addbattle7"+table)[0].value);
        pcstatus.num[5] = Number(document.getElementsByName("tobattle7"+table)[0].value);
        sheet.pcstatus.battle.push(pcstatus);
    }
    for(let table = 0; table < search.rows.length-1; table++){
        let pcstatus = {
            isinput: false,
            growth: false,
            name: "技能名",
            inputname: "()",
            num: [0, 0, 0, 0, 0, 0]
        }
        pcstatus.growth = document.getElementsByName("chsearch7"+table)[0].checked;
        if(table < defpcsearchnum){
            pcstatus.name = search.rows[table+1].cells[1].innerText;
            if(search.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatus.isinput = true;
                pcstatus.inputname = document.getElementsByName("searchname7"+table)[0].value;
            }else{
                pcstatus.isinput = false;
                pcstatus.inputname = "";
            }
        
        }else{
            pcstatus.name = document.getElementsByName("searchname7"+table)[0].value;
            pcstatus.isinput = false;
            pcstatus.inputname = "";
        }
        pcstatus.num[0] = Number(document.getElementsByName("defsearch7"+table)[0].value);
        pcstatus.num[1] = Number(document.getElementsByName("bpsearch7"+table)[0].value);
        pcstatus.num[2] = Number(document.getElementsByName("ipsearch7"+table)[0].value);
        pcstatus.num[3] = Number(document.getElementsByName("plsearch7"+table)[0].value);
        pcstatus.num[4] = Number(document.getElementsByName("addsearch7"+table)[0].value);
        pcstatus.num[5] = Number(document.getElementsByName("tosearch7"+table)[0].value);
        sheet.pcstatus.search.push(pcstatus);
    }
    for(let table = 0; table < action.rows.length-1; table++){
        let pcstatus = {
            isinput: false,
            growth: false,
            name: "技能名",
            inputname: "()",
            num: [0, 0, 0, 0, 0, 0]
        }
        pcstatus.growth = document.getElementsByName("chaction7"+table)[0].checked;
        if(table < defpcactionnum){
            pcstatus.name = action.rows[table+1].cells[1].innerText;
            if(action.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatus.isinput = true;
                pcstatus.inputname = document.getElementsByName("actionname7"+table)[0].value;
            }else{
                pcstatus.isinput = false;
                pcstatus.inputname = "";
            }
        
        }else{
            pcstatus.name = document.getElementsByName("actionname7"+table)[0].value;
            pcstatus.isinput = false;
            pcstatus.inputname = "";
        }
        pcstatus.num[0] = Number(document.getElementsByName("defaction7"+table)[0].value);
        pcstatus.num[1] = Number(document.getElementsByName("bpaction7"+table)[0].value);
        pcstatus.num[2] = Number(document.getElementsByName("ipaction7"+table)[0].value);
        pcstatus.num[3] = Number(document.getElementsByName("plaction7"+table)[0].value);
        pcstatus.num[4] = Number(document.getElementsByName("addaction7"+table)[0].value);
        pcstatus.num[5] = Number(document.getElementsByName("toaction7"+table)[0].value);
        sheet.pcstatus.action.push(pcstatus);
    }
    for(let table = 0; table < negotiations.rows.length-1; table++){
        let pcstatus = {
            isinput: false,
            growth: false,
            name: "技能名",
            inputname: "()",
            num: [0, 0, 0, 0, 0, 0]
        }
        pcstatus.growth = document.getElementsByName("chnegotiations7"+table)[0].checked;
        if(table < defpcnegotiationsnum){
            pcstatus.name = negotiations.rows[table+1].cells[1].innerText;
            if(negotiations.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatus.isinput = true;
                pcstatus.inputname = document.getElementsByName("negotiationsname7"+table)[0].value;
            }else{
                pcstatus.isinput = false;
                pcstatus.inputname = "";
            }
        
        }else{
            pcstatus.name = document.getElementsByName("negotiationsname7"+table)[0].value;
            pcstatus.isinput = false;
            pcstatus.inputname = "";
        }
        pcstatus.num[0] = Number(document.getElementsByName("defnegotiations7"+table)[0].value);
        pcstatus.num[1] = Number(document.getElementsByName("bpnegotiations7"+table)[0].value);
        pcstatus.num[2] = Number(document.getElementsByName("ipnegotiations7"+table)[0].value);
        pcstatus.num[3] = Number(document.getElementsByName("plnegotiations7"+table)[0].value);
        pcstatus.num[4] = Number(document.getElementsByName("addnegotiations7"+table)[0].value);
        pcstatus.num[5] = Number(document.getElementsByName("tonegotiations7"+table)[0].value);
        sheet.pcstatus.negotiations.push(pcstatus);
    }
    for(let table = 0; table < knowledge.rows.length-1; table++){
        let pcstatus = {
            isinput: false,
            growth: false,
            name: "技能名",
            inputname: "()",
            num: [0, 0, 0, 0, 0, 0]
        }
        pcstatus.growth = document.getElementsByName("chknowledge7"+table)[0].checked;
        if(table < defpcknowledgenum){
            pcstatus.name = knowledge.rows[table+1].cells[1].innerText;
            if(knowledge.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatus.isinput = true;
                pcstatus.inputname = document.getElementsByName("knowledgename7"+table)[0].value;
            }else{
                pcstatus.isinput = false;
                pcstatus.inputname = "";
            }
        
        }else{
            pcstatus.name = document.getElementsByName("knowledgename7"+table)[0].value;
            pcstatus.isinput = false;
            pcstatus.inputname = "";
        }
        pcstatus.num[0] = Number(document.getElementsByName("defknowledge7"+table)[0].value);
        pcstatus.num[1] = Number(document.getElementsByName("bpknowledge7"+table)[0].value);
        pcstatus.num[2] = Number(document.getElementsByName("ipknowledge7"+table)[0].value);
        pcstatus.num[3] = Number(document.getElementsByName("plknowledge7"+table)[0].value);
        pcstatus.num[4] = Number(document.getElementsByName("addknowledge7"+table)[0].value);
        pcstatus.num[5] = Number(document.getElementsByName("toknowledge7"+table)[0].value);
        sheet.pcstatus.knowledge.push(pcstatus);
    }
    for(let table = 0; table < etc.rows.length-1; table++){
        let pcstatus = {
            isinput: false,
            growth: false,
            name: "技能名",
            inputname: "()",
            num: [0, 0, 0, 0, 0, 0]
        }
        pcstatus.growth = document.getElementsByName("chetc7"+table)[0].checked;
        pcstatus.name = document.getElementsByName("etcname7"+table)[0].value;
        pcstatus.isinput = false;
        pcstatus.inputname = "";
        pcstatus.num[0] = Number(document.getElementsByName("defetc7"+table)[0].value);
        pcstatus.num[1] = Number(document.getElementsByName("bpetc7"+table)[0].value);
        pcstatus.num[2] = Number(document.getElementsByName("ipetc7"+table)[0].value);
        pcstatus.num[3] = Number(document.getElementsByName("pletc7"+table)[0].value);
        pcstatus.num[4] = Number(document.getElementsByName("addetc7"+table)[0].value);
        pcstatus.num[5] = Number(document.getElementsByName("toetc7"+table)[0].value);
        sheet.pcstatus.etc.push(pcstatus);
    }
    for(let table = 0; table < items.rows.length-1; table++){
        let itemsdata = {
            name: "names",
            num: "0",
            detail: "見本"
        };
        itemsdata.name = document.getElementsByName("itemsname7"+table)[0].value;
        itemsdata.num = document.getElementsByName("itemsnum7"+table)[0].value;
        itemsdata.detail = document.getElementsByName("itemsdetail7"+table)[0].value;
        sheet.items.push(itemsdata);
    }
    
    const data = JSON.stringify(sheet);
    if(type == "PC"){
        const link = document.createElement("a");

        link.href = "data:text/plain," + encodeURIComponent(data);
        link.download = document.status7.charaname.value+"7版.json";
        link.click();
    }else{
        navigator.clipboard.writeText(data);
        document.getElementById("saveS7").innerText = "クリップボードにコピー済み";
    }
    
}

function loadpage7(input){
    let reader = new FileReader();
    let buf;
    reader.onload = (evt) => {
        buf = evt.target.result;
        console.log(buf);
        const sheet = JSON.parse(buf);
        document.status7.charaname.value = sheet.pcdetail.name;
        document.status7.usestand.value = sheet.pcdetail.usestand;
        document.status7.sex.value = sheet.pcdetail.sex;
        document.status7.age.value = sheet.pcdetail.age;
        document.status7.stature.value = sheet.pcdetail.stature;
        document.status7.weight.value = sheet.pcdetail.weight;
        document.status7.from.value = sheet.pcdetail.from;
        document.status7.heir.value = sheet.pcdetail.heir;
        document.status7.eye.value = sheet.pcdetail.eye;
        document.status7.skin.value = sheet.pcdetail.skin;
        document.status7.business.value = sheet.pcdetail.business;
        document.status7.charadetail.value = sheet.pcdetail.detail;

        document.status7.standname.value = sheet.standdetail.name;
        document.status7.standdetail.value = sheet.standdetail.detail;

        document.status7.str0.value = sheet.pcstatus.str[0];
        document.status7.str1.value = sheet.pcstatus.str[1];
        document.status7.str2.value = sheet.pcstatus.str[2];
        document.status7.str3.value = sheet.pcstatus.str[3];
        document.status7.str4.value = sheet.pcstatus.str[4];
        document.status7.con0.value = sheet.pcstatus.con[0];
        document.status7.con1.value = sheet.pcstatus.con[1];
        document.status7.con2.value = sheet.pcstatus.con[2];
        document.status7.con3.value = sheet.pcstatus.con[3];
        document.status7.con4.value = sheet.pcstatus.con[4];
        document.status7.pow0.value = sheet.pcstatus.pow[0];
        document.status7.pow1.value = sheet.pcstatus.pow[1];
        document.status7.pow2.value = sheet.pcstatus.pow[2];
        document.status7.pow3.value = sheet.pcstatus.pow[3];
        document.status7.pow4.value = sheet.pcstatus.pow[4];
        document.status7.dex0.value = sheet.pcstatus.dex[0];
        document.status7.dex1.value = sheet.pcstatus.dex[1];
        document.status7.dex2.value = sheet.pcstatus.dex[2];
        document.status7.dex3.value = sheet.pcstatus.dex[3];
        document.status7.dex4.value = sheet.pcstatus.dex[4];
        document.status7.app0.value = sheet.pcstatus.app[0];
        document.status7.app1.value = sheet.pcstatus.app[1];
        document.status7.app2.value = sheet.pcstatus.app[2];
        document.status7.app3.value = sheet.pcstatus.app[3];
        document.status7.app4.value = sheet.pcstatus.app[4];
        document.status7.siz0.value = sheet.pcstatus.siz[0];
        document.status7.siz1.value = sheet.pcstatus.siz[1];
        document.status7.siz2.value = sheet.pcstatus.siz[2];
        document.status7.siz3.value = sheet.pcstatus.siz[3];
        document.status7.siz4.value = sheet.pcstatus.siz[4];
        document.status7.int0.value = sheet.pcstatus.int[0];
        document.status7.int1.value = sheet.pcstatus.int[1];
        document.status7.int2.value = sheet.pcstatus.int[2];
        document.status7.int3.value = sheet.pcstatus.int[3];
        document.status7.int4.value = sheet.pcstatus.int[4];
        document.status7.edu0.value = sheet.pcstatus.edu[0];
        document.status7.edu1.value = sheet.pcstatus.edu[1];
        document.status7.edu2.value = sheet.pcstatus.edu[2];
        document.status7.edu3.value = sheet.pcstatus.edu[3];
        document.status7.edu4.value = sheet.pcstatus.edu[4];
        document.status7.hp0.value = sheet.pcstatus.hp[0];
        document.status7.hp1.value = sheet.pcstatus.hp[1];
        document.status7.hp2.value = sheet.pcstatus.hp[2];
        document.status7.mp0.value = sheet.pcstatus.mp[0];
        document.status7.mp1.value = sheet.pcstatus.mp[1];
        document.status7.mp2.value = sheet.pcstatus.mp[2];
        document.status7.san0.value = sheet.pcstatus.san[0];
        document.status7.san1.value = sheet.pcstatus.san[1];
        document.status7.san2.value = sheet.pcstatus.san[2];
        document.status7.idea0.value = sheet.pcstatus.idea[0];
        document.status7.idea1.value = sheet.pcstatus.idea[1];
        document.status7.idea2.value = sheet.pcstatus.idea[2];
        document.status7.luck0.value = sheet.pcstatus.luck[0];
        document.status7.luck1.value = sheet.pcstatus.luck[1];
        document.status7.luck2.value = sheet.pcstatus.luck[2];
        document.status7.know0.value = sheet.pcstatus.know[0];
        document.status7.know1.value = sheet.pcstatus.know[1];
        document.status7.know2.value = sheet.pcstatus.know[2];

        document.status7.db.value = sheet.pcstatus.db;
        document.status7.mov.value = sheet.pcstatus.mov;
        document.status7.bld.value = sheet.pcstatus.bld;
        document.status7.curBP.value = sheet.pcstatus.bp[0];
        document.status7.maxBP.value = sheet.pcstatus.bp[1];
        document.status7.curIP.value = sheet.pcstatus.ip[0];
        document.status7.maxIP.value = sheet.pcstatus.ip[1];
        document.status7.curSP.value = sheet.pcstatus.sp[0];
        document.status7.maxSP.value = sheet.pcstatus.sp[1];

        document.status7.power.value = sheet.standstatus.parameter[0];
        document.status7.speed.value = sheet.standstatus.parameter[1];
        document.status7.durability.value = sheet.standstatus.parameter[2];
        document.status7.range.value = sheet.standstatus.parameter[3];
        document.status7.accuracy.value = sheet.standstatus.parameter[4];
        document.status7.growth.value = sheet.standstatus.parameter[5];
        document.status7.dexS0.value = sheet.standstatus.parameter[6];
        document.status7.dexS1.value = sheet.standstatus.parameter[7];
        document.status7.dexS2.value = sheet.standstatus.parameter[8];
        document.status7.dbS.value = sheet.standstatus.db;
        document.status7.deffenceS.value = sheet.standstatus.deffence;
        document.status7.usempS.value = sheet.standstatus.mpcost;

        loadaddpc(7, "battle", sheet.pcstatus.battle);
        loadaddpc(7, "search", sheet.pcstatus.search);
        loadaddpc(7, "action", sheet.pcstatus.action);
        loadaddpc(7, "negotiations", sheet.pcstatus.negotiations);
        loadaddpc(7, "knowledge", sheet.pcstatus.knowledge);
        loadaddpc(7, "etc", sheet.pcstatus.etc);

        loadaddstand(7, "battle", sheet.standstatus.battle);
        loadaddstand(7, "action", sheet.standstatus.action);

        loadadditems(7, sheet.items);
    };
    reader.readAsText(input.files[0], "UTF-8");
    //let data = JSON.parse(reader.result);
}

function loadpageS7(){
    let buf = navigator.clipboard.readText();
    
    const sheet = JSON.parse(buf);
    document.status7.charaname.value = sheet.pcdetail.name;
    document.status7.usestand.value = sheet.pcdetail.usestand;
    document.status7.sex.value = sheet.pcdetail.sex;
    document.status7.age.value = sheet.pcdetail.age;
    document.status7.stature.value = sheet.pcdetail.stature;
    document.status7.weight.value = sheet.pcdetail.weight;
    document.status7.from.value = sheet.pcdetail.from;
    document.status7.heir.value = sheet.pcdetail.heir;
    document.status7.eye.value = sheet.pcdetail.eye;
    document.status7.skin.value = sheet.pcdetail.skin;
    document.status7.business.value = sheet.pcdetail.business;
    document.status7.charadetail.value = sheet.pcdetail.detail;

    document.status7.standname.value = sheet.standdetail.name;
    document.status7.standdetail.value = sheet.standdetail.detail;

    document.status7.str0.value = sheet.pcstatus.str[0];
    document.status7.str1.value = sheet.pcstatus.str[1];
    document.status7.str2.value = sheet.pcstatus.str[2];
    document.status7.str3.value = sheet.pcstatus.str[3];
    document.status7.str4.value = sheet.pcstatus.str[4];
    document.status7.con0.value = sheet.pcstatus.con[0];
    document.status7.con1.value = sheet.pcstatus.con[1];
    document.status7.con2.value = sheet.pcstatus.con[2];
    document.status7.con3.value = sheet.pcstatus.con[3];
    document.status7.con4.value = sheet.pcstatus.con[4];
    document.status7.pow0.value = sheet.pcstatus.pow[0];
    document.status7.pow1.value = sheet.pcstatus.pow[1];
    document.status7.pow2.value = sheet.pcstatus.pow[2];
    document.status7.pow3.value = sheet.pcstatus.pow[3];
    document.status7.pow4.value = sheet.pcstatus.pow[4];
    document.status7.dex0.value = sheet.pcstatus.dex[0];
    document.status7.dex1.value = sheet.pcstatus.dex[1];
    document.status7.dex2.value = sheet.pcstatus.dex[2];
    document.status7.dex3.value = sheet.pcstatus.dex[3];
    document.status7.dex4.value = sheet.pcstatus.dex[4];
    document.status7.app0.value = sheet.pcstatus.app[0];
    document.status7.app1.value = sheet.pcstatus.app[1];
    document.status7.app2.value = sheet.pcstatus.app[2];
    document.status7.app3.value = sheet.pcstatus.app[3];
    document.status7.app4.value = sheet.pcstatus.app[4];
    document.status7.siz0.value = sheet.pcstatus.siz[0];
    document.status7.siz1.value = sheet.pcstatus.siz[1];
    document.status7.siz2.value = sheet.pcstatus.siz[2];
    document.status7.siz3.value = sheet.pcstatus.siz[3];
    document.status7.siz4.value = sheet.pcstatus.siz[4];
    document.status7.int0.value = sheet.pcstatus.int[0];
    document.status7.int1.value = sheet.pcstatus.int[1];
    document.status7.int2.value = sheet.pcstatus.int[2];
    document.status7.int3.value = sheet.pcstatus.int[3];
    document.status7.int4.value = sheet.pcstatus.int[4];
    document.status7.edu0.value = sheet.pcstatus.edu[0];
    document.status7.edu1.value = sheet.pcstatus.edu[1];
    document.status7.edu2.value = sheet.pcstatus.edu[2];
    document.status7.edu3.value = sheet.pcstatus.edu[3];
    document.status7.edu4.value = sheet.pcstatus.edu[4];
    document.status7.hp0.value = sheet.pcstatus.hp[0];
    document.status7.hp1.value = sheet.pcstatus.hp[1];
    document.status7.hp2.value = sheet.pcstatus.hp[2];
    document.status7.mp0.value = sheet.pcstatus.mp[0];
    document.status7.mp1.value = sheet.pcstatus.mp[1];
    document.status7.mp2.value = sheet.pcstatus.mp[2];
    document.status7.san0.value = sheet.pcstatus.san[0];
    document.status7.san1.value = sheet.pcstatus.san[1];
    document.status7.san2.value = sheet.pcstatus.san[2];
    document.status7.idea0.value = sheet.pcstatus.idea[0];
    document.status7.idea1.value = sheet.pcstatus.idea[1];
    document.status7.idea2.value = sheet.pcstatus.idea[2];
    document.status7.luck0.value = sheet.pcstatus.luck[0];
    document.status7.luck1.value = sheet.pcstatus.luck[1];
    document.status7.luck2.value = sheet.pcstatus.luck[2];
    document.status7.know0.value = sheet.pcstatus.know[0];
    document.status7.know1.value = sheet.pcstatus.know[1];
    document.status7.know2.value = sheet.pcstatus.know[2];

    document.status7.db.value = sheet.pcstatus.db;
    document.status7.mov.value = sheet.pcstatus.mov;
    document.status7.bld.value = sheet.pcstatus.bld;
    document.status7.curBP.value = sheet.pcstatus.bp[0];
    document.status7.maxBP.value = sheet.pcstatus.bp[1];
    document.status7.curIP.value = sheet.pcstatus.ip[0];
    document.status7.maxIP.value = sheet.pcstatus.ip[1];
    document.status7.curSP.value = sheet.pcstatus.sp[0];
    document.status7.maxSP.value = sheet.pcstatus.sp[1];

    document.status7.power.value = sheet.standstatus.parameter[0];
    document.status7.speed.value = sheet.standstatus.parameter[1];
    document.status7.durability.value = sheet.standstatus.parameter[2];
    document.status7.range.value = sheet.standstatus.parameter[3];
    document.status7.accuracy.value = sheet.standstatus.parameter[4];
    document.status7.growth.value = sheet.standstatus.parameter[5];
    document.status7.dexS0.value = sheet.standstatus.parameter[6];
    document.status7.dexS1.value = sheet.standstatus.parameter[7];
    document.status7.dexS2.value = sheet.standstatus.parameter[8];
    document.status7.dbS.value = sheet.standstatus.db;
    document.status7.deffenceS.value = sheet.standstatus.deffence;
    document.status7.usempS.value = sheet.standstatus.mpcost;

    loadaddpc(7, "battle", sheet.pcstatus.battle);
    loadaddpc(7, "search", sheet.pcstatus.search);
    loadaddpc(7, "action", sheet.pcstatus.action);
    loadaddpc(7, "negotiations", sheet.pcstatus.negotiations);
    loadaddpc(7, "knowledge", sheet.pcstatus.knowledge);
    loadaddpc(7, "etc", sheet.pcstatus.etc);

    loadaddstand(7, "battle", sheet.standstatus.battle);
    loadaddstand(7, "action", sheet.standstatus.action);

    loadadditems(7, sheet.items);
}