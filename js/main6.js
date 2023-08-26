function calc6(){
    document.getElementById("coco6").innerText = "ココフォリア出力";
    document.getElementById("saveS6").innerText = "データ保存(スマホ)";
    var defstr = Number(document.status6.str0.value);
    var defcon = Number(document.status6.con0.value);
    var defpow = Number(document.status6.pow0.value);
    var defdex = Number(document.status6.dex0.value);
    var defapp = Number(document.status6.app0.value);
    var defsiz = Number(document.status6.siz0.value);
    var defint = Number(document.status6.int0.value);
    var defedu = Number(document.status6.edu0.value);
    var str = defstr + Number(document.status6.str1.value);
    var con = defcon + Number(document.status6.con1.value);
    var pow = defpow + Number(document.status6.pow1.value);
    var dex = defdex + Number(document.status6.dex1.value);
    var app = defapp + Number(document.status6.app1.value);
    var siz = defsiz + Number(document.status6.siz1.value);
    var int = defint + Number(document.status6.int1.value);
    var edu = defedu + Number(document.status6.edu1.value);
    document.status6.str2.value = str;
    document.status6.con2.value = con;
    document.status6.pow2.value = pow;
    document.status6.dex2.value = dex;
    document.status6.app2.value = app;
    document.status6.siz2.value = siz;
    document.status6.int2.value = int;
    document.status6.edu2.value = edu;

    var defhp = Math.ceil((defcon+defsiz)/2);
    var defmp = defpow;
    var defsan = defpow*5;
    var defidea = defint*5;
    var defluck = defpow*5;
    var defknow = defedu*5;
    if(document.status6.usestand.value == "true"){
        document.status6.defbattle66.value = 50;
        document.status6.defsearch69.value = 50;
        document.status6.defaction68.value = 50;
        defhp *= 2;
        defmp /= 2;
        defsan /= 2;
        defluck /= 2;
    }else{
        document.status6.defbattle66.value = 25;
        document.status6.defsearch69.value = 40;
        document.status6.defaction68.value = 25;
    }
    document.status6.hp0.value = defhp;
    document.status6.mp0.value = defmp;
    document.status6.san0.value = defsan;
    document.status6.idea0.value = defidea;
    document.status6.luck0.value = defluck;
    document.status6.know0.value = defknow;

    var hp = defhp + Number(document.status6.hp1.value);
    var mp = defmp + Number(document.status6.mp1.value);
    var san = defsan + Number(document.status6.san1.value);
    var idea = defidea + Number(document.status6.idea1.value);
    var luck = defluck + Number(document.status6.luck1.value);
    var know = defknow + Number(document.status6.know1.value);
    document.status6.hp2.value = hp;
    document.status6.mp2.value = mp;
    document.status6.san2.value = san;
    document.status6.idea2.value = idea;
    document.status6.luck2.value = luck;
    document.status6.know2.value = know;

    var dbnum = str+siz;
    var db;
    if(dbnum >= 2 && dbnum < 13){
        db = "-1d6";
    }else if(dbnum >= 13 && dbnum < 17){
        db = "-1d4";
    }else if(dbnum >= 25 && dbnum < 33){
        db = "+1d4";
    }else if(dbnum >= 33){
        db = "+1d6";
    }else{
        db = "0";
    }
    document.status6.db.value = db;

    var bp = edu*20;
    var ip = int*10;
    var sp = pow;
    document.status6.maxBP.value = bp;
    document.status6.maxIP.value = ip;
    document.status6.maxSP.value = sp;

    var cursp = Number(document.status6.power.value)
                + Number(document.status6.speed.value)
                + Number(document.status6.durability.value)
                + Number(document.status6.range.value)
                + Number(document.status6.accuracy.value);
    document.status6.curSP.value = cursp;

    document.status6.defbattle62.value = dex*2;
    document.status6.defnegotiations64.value = edu*5;

    var corbattlestate;
    var coractionstate;
    var abilityaccuracy;
    var dexs;
    var avoidance;
    var dbs;
    var deffences;
    var usemps;

    switch(Number(document.status6.accuracy.value)){
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

    switch(Number(document.status6.speed.value)){
        case 0:
            dexs = 0;
            avoidance = 0;
            break;
        case 1:
            dexs = 4;
            avoidance = 0;
            break;
        case 2:
            dexs = 8;
            avoidance = 15;
            break;
        case 3:
            dexs = 12;
            avoidance = 30;
            break;
        case 4:
            dexs = 16;
            avoidance = 45;
            break;
        case 5:
            dexs = 20;
            avoidance = 60;
            break;
        default:
            dexs = 4;
            avoidance = 0;
    }

    switch(Number(document.status6.power.value)){
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

    switch(Number(document.status6.durability.value)){
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

    const battle = document.getElementsByClassName("corstandbattle6");
    const action = document.getElementsByClassName("corstandaction6");
    for(let i = 0; i < battle.length; i++){
        battle[i].value = corbattlestate;
    }
    for(let i = 0; i < action.length; i++){
        action[i].value = coractionstate;
    }
    
    document.status6.dexS.value = dexs;
    document.status6.dbS.value = dbs;
    document.status6.deffenceS.value = deffences;
    document.status6.usempS.value = usemps;
    document.status6.defstandabilitybattle62.value = avoidance;
    document.status6.corstandabilitybattle62.value = 0;
    document.status6.defstandabilityaction60.value = abilityaccuracy;
    document.status6.corstandabilityaction60.value = 0;
    calcstatus6();

}

function calcstatus6(){
    var standabilitybattle = document.getElementById("standabilitybattle6");
    var standabilityaction = document.getElementById("standabilityaction6");
    var battle = document.getElementById("battle6");
    var search = document.getElementById("search6");
    var action = document.getElementById("action6");
    var negotiations = document.getElementById("negotiations6");
    var knowledge = document.getElementById("knowledge6");
    var etc = document.getElementById("etc6");
    
    var allbp = 0;
    var allip = 0;
    
    for(let table = 0; table < standabilitybattle.rows.length-1; table++){
        var def = Number(document.getElementsByName("defstandabilitybattle6"+table)[0].value);
        var cor = Number(document.getElementsByName("corstandabilitybattle6"+table)[0].value);
        var pl = Number(document.getElementsByName("plstandabilitybattle6"+table)[0].value);
        var add = Number(document.getElementsByName("addstandabilitybattle6"+table)[0].value);

        var sum = def+cor+pl+add;

        document.getElementsByName("tostandabilitybattle6"+table)[0].value = sum;
    }
    
    for(let table = 0; table < standabilityaction.rows.length-1; table++){
        var def = Number(document.getElementsByName("defstandabilityaction6"+table)[0].value);
        var cor = Number(document.getElementsByName("corstandabilityaction6"+table)[0].value);
        var pl = Number(document.getElementsByName("plstandabilityaction6"+table)[0].value);
        var add = Number(document.getElementsByName("addstandabilityaction6"+table)[0].value);

        var sum = def+cor+pl+add;

        document.getElementsByName("tostandabilityaction6"+table)[0].value = sum;
    }

    for(let table = 0; table < battle.rows.length-1; table++){
        var def = Number(document.getElementsByName("defbattle6"+table)[0].value);
        var bp = Number(document.getElementsByName("bpbattle6"+table)[0].value);
        var ip = Number(document.getElementsByName("ipbattle6"+table)[0].value);
        var pl = Number(document.getElementsByName("plbattle6"+table)[0].value);
        var add = Number(document.getElementsByName("addbattle6"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("tobattle6"+table)[0].value = sum;
    }

    for(let table = 0; table < search.rows.length-1; table++){
        var def = Number(document.getElementsByName("defsearch6"+table)[0].value);
        var bp = Number(document.getElementsByName("bpsearch6"+table)[0].value);
        var ip = Number(document.getElementsByName("ipsearch6"+table)[0].value);
        var pl = Number(document.getElementsByName("plsearch6"+table)[0].value);
        var add = Number(document.getElementsByName("addsearch6"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("tosearch6"+table)[0].value = sum;
    }

    for(let table = 0; table < action.rows.length-1; table++){
        var def = Number(document.getElementsByName("defaction6"+table)[0].value);
        var bp = Number(document.getElementsByName("bpaction6"+table)[0].value);
        var ip = Number(document.getElementsByName("ipaction6"+table)[0].value);
        var pl = Number(document.getElementsByName("plaction6"+table)[0].value);
        var add = Number(document.getElementsByName("addaction6"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("toaction6"+table)[0].value = sum;
    }

    for(let table = 0; table < negotiations.rows.length-1; table++){
        var def = Number(document.getElementsByName("defnegotiations6"+table)[0].value);
        var bp = Number(document.getElementsByName("bpnegotiations6"+table)[0].value);
        var ip = Number(document.getElementsByName("ipnegotiations6"+table)[0].value);
        var pl = Number(document.getElementsByName("plnegotiations6"+table)[0].value);
        var add = Number(document.getElementsByName("addnegotiations6"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("tonegotiations6"+table)[0].value = sum;
    }

    for(let table = 0; table < knowledge.rows.length-1; table++){
        var def = Number(document.getElementsByName("defknowledge6"+table)[0].value);
        var bp = Number(document.getElementsByName("bpknowledge6"+table)[0].value);
        var ip = Number(document.getElementsByName("ipknowledge6"+table)[0].value);
        var pl = Number(document.getElementsByName("plknowledge6"+table)[0].value);
        var add = Number(document.getElementsByName("addknowledge6"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("toknowledge6"+table)[0].value = sum;
    }

    for(let table = 0; table < etc.rows.length-1; table++){
        var def = Number(document.getElementsByName("defetc6"+table)[0].value);
        var bp = Number(document.getElementsByName("bpetc6"+table)[0].value);
        var ip = Number(document.getElementsByName("ipetc6"+table)[0].value);
        var pl = Number(document.getElementsByName("pletc6"+table)[0].value);
        var add = Number(document.getElementsByName("addetc6"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("toetc6"+table)[0].value = sum;
    }

    document.status6.curBP.value = allbp;
    document.status6.curIP.value = allip;
}

function randomStatus6(){
    var str = Math.floor(Math.random() * (18 - 3) + 3);
    var con = Math.floor(Math.random() * (18 - 3) + 3);
    var pow = Math.floor(Math.random() * (18 - 3) + 3);
    var dex = Math.floor(Math.random() * (18 - 3) + 3);
    var app = Math.floor(Math.random() * (18 - 3) + 3);
    var siz = Math.floor(Math.random() * (12 - 2) + 2 + 6);
    var int = Math.floor(Math.random() * (12 - 2) + 2 + 6);
    var edu = Math.floor(Math.random() * (18 - 3) + 3 + 3);
    document.status6.str0.value = str;
    document.status6.con0.value = con;
    if(document.status6.usestand.value == "true"){
        document.status6.pow0.value = pow*2;

    }else{
        document.status6.pow0.value = pow;
    
    }
    document.status6.dex0.value = dex;
    document.status6.app0.value = app;
    document.status6.siz0.value = siz;
    document.status6.int0.value = int;
    document.status6.edu0.value = edu;
    calc6();
}

function save6(){
    var power;
    var speed;
    var durability;
    var range;
    var accuracy;
    var growth;

    var standabilitybattle = document.getElementById("standabilitybattle6");
    var standabilityaction = document.getElementById("standabilityaction6");
    var battle = document.getElementById("battle6");
    var search = document.getElementById("search6");
    var action = document.getElementById("action6");
    var negotiations = document.getElementById("negotiations6");
    var knowledge = document.getElementById("knowledge6");
    var etc = document.getElementById("etc6");
    var items = document.getElementById("items6");

    var defpcbattlenum = defpcbattlenum6;
    var defpcsearchnum = defpcsearchnum6;
    var defpcactionnum = defpcactionnum6;
    var defpcnegotiationsnum = defpcnegotiationsnum6;
    var defpcknowledgenum = defpcknowledgenum6;
    var defstandbattlenum = defstandbattlenum6;
    var defstandactionnum = defstandactionnum6;

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
                + document.getElementsByName("standabilitybattlename6"+table)[0].value + "- " 
                + document.getElementsByName("tostandabilitybattle6"+table)[0].value + "\n";
            }else{
                standstatusB += standabilitybattle.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("tostandabilitybattle6"+table)[0].value + "\n";
            }
            
            
        }else{
            standstatusB += document.getElementsByName("standabilitybattlename6"+table)[0].value + "- " 
                            + document.getElementsByName("tostandabilitybattle6"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < standabilityaction.rows.length-1; table++){
        if(table < defstandactionnum){
            if(standabilityaction.rows[table+1].cells[1].innerHTML.includes("input")){
                standstatusA += standabilityaction.rows[table+1].cells[1].innerText
                + document.getElementsByName("standabilityactionname6"+table)[0].value + "- " 
                + document.getElementsByName("tostandabilityaction6"+table)[0].value + "\n";
            }else{
                standstatusA += standabilityaction.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("tostandabilityaction6"+table)[0].value + "\n";
            }
        
        }else{
            standstatusA += document.getElementsByName("standabilityactionname6"+table)[0].value + "- " 
                            + document.getElementsByName("tostandabilityaction6"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < battle.rows.length-1; table++){
        if(document.getElementsByName("tobattle6"+table)[0].value
            == document.getElementsByName("defbattle6"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcbattlenum){
            if(battle.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusB += battle.rows[table+1].cells[1].innerText
                + document.getElementsByName("battlename6"+table)[0].value + "- " 
                + document.getElementsByName("tobattle6"+table)[0].value + "\n";
            }else{
                pcstatusB += battle.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("tobattle6"+table)[0].value + "\n";
            }
        
        }else{
            pcstatusB += document.getElementsByName("battlename6"+table)[0].value + "- " 
                            + document.getElementsByName("tobattle6"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < search.rows.length-1; table++){
        if(document.getElementsByName("tosearch6"+table)[0].value
            == document.getElementsByName("defsearch6"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcsearchnum){
            if(search.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusS += search.rows[table+1].cells[1].innerText
                + document.getElementsByName("searchname6"+table)[0].value + "- " 
                + document.getElementsByName("tosearch6"+table)[0].value + "\n";
            }else{
                pcstatusS += search.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("tosearch6"+table)[0].value + "\n";
            }
        
        }else{
            pcstatusS += document.getElementsByName("searchname6"+table)[0].value + "- " 
                            + document.getElementsByName("tosearch6"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < action.rows.length-1; table++){
        if(document.getElementsByName("toaction6"+table)[0].value
            == document.getElementsByName("defaction6"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcactionnum){
            if(action.rows[table+1].cells[1].innerHTML.includes("input")){
                
                pcstatusA += action.rows[table+1].cells[1].innerText
                + document.getElementsByName("actionname6"+table)[0].value + "- " 
                + document.getElementsByName("toaction6"+table)[0].value + "\n";
            }else{
                pcstatusA += action.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("toaction6"+table)[0].value + "\n";
            }
        
        }else{
            pcstatusA += document.getElementsByName("actionname6"+table)[0].value + "- " 
                            + document.getElementsByName("toaction6"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < negotiations.rows.length-1; table++){
        if(document.getElementsByName("tonegotiations6"+table)[0].value
            == document.getElementsByName("defnegotiations6"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcnegotiationsnum){
            if(negotiations.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusN += negotiations.rows[table+1].cells[1].innerText
                + document.getElementsByName("negotiationsname6"+table)[0].value + "- " 
                + document.getElementsByName("tonegotiations6"+table)[0].value + "\n";
            }else{
                pcstatusN += negotiations.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("tonegotiations6"+table)[0].value + "\n";
            }
        
        }else{
            pcstatusN += document.getElementsByName("negotiationsname6"+table)[0].value + "- " 
                            + document.getElementsByName("tonegotiations6"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < knowledge.rows.length-1; table++){
        if(document.getElementsByName("toknowledge6"+table)[0].value
            == document.getElementsByName("defknowledge6"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcknowledgenum){
            if(knowledge.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusK += knowledge.rows[table+1].cells[1].innerText
                + document.getElementsByName("knowledgename6"+table)[0].value + "- " 
                + document.getElementsByName("toknowledge6"+table)[0].value + "\n";
            }else{
                pcstatusK += knowledge.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("toknowledge6"+table)[0].value + "\n";
            }
        
        }else{
            pcstatusK += document.getElementsByName("knowledgename6"+table)[0].value + "- " 
                            + document.getElementsByName("toknowledge6"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < etc.rows.length-1; table++){
        if(document.getElementsByName("toetc6"+table)[0].value
            == document.getElementsByName("defetc6"+table)[0].value) isinitial = true;
            else isinitial = false;
       {
            pcstatusE += document.getElementsByName("etcname6"+table)[0].value + "- " 
                            + document.getElementsByName("toetc6"+table)[0].value + "\n";
        }
        
    }
    for(let table = 0; table < items.rows.length-1; table++){
        itemsstr += document.getElementsByName("itemsname6"+table)[0].value + " " 
                    + document.getElementsByName("itemsnum6"+table)[0].value + "\n"
                    + document.getElementsByName("itemsdetail6"+table)[0].value + "\n";
    
    }

    switch(Number(document.status6.power.value)){
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

    switch(Number(document.status6.speed.value)){
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

    switch(Number(document.status6.durability.value)){
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

    switch(Number(document.status6.range.value)){
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

    switch(Number(document.status6.accuracy.value)){
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

    switch(Number(document.status6.growth.value)){
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
    if(document.status6.usestand.value == "true"){
        usestand = "(スタンド使い)";
        isstandstr = true;
    }else{
        usestand = "";
        isstandstr = false;
    }

    var pcstr = "【名前】" + document.status6.charaname.value + " " + usestand + "　【性別】" + document.status6.sex.value + "\n"
                + "【年齢】" + document.status6.age.value + "歳　【身長】" + document.status6.stature.value + "cm　【体重】" + document.status6.weight.value + "kg\n"
                + "【出身】" + document.status6.from.value + "\n"
                + "【髪の色】" + document.status6.heir.value + "　【瞳の色】" + document.status6.eye.value + "　【肌の色】" + document.status6.skin.value + "\n"
                + "【職業(配属先)】" + document.status6.business.value + "\n"
                + "【ステータス】\n"
                + "STR- " + document.status6.str2.value + "\n"
                + "CON- " + document.status6.con2.value + "\n"
                + "POW- " + document.status6.pow2.value + "\n"
                + "DEX- " + document.status6.dex2.value + "\n"
                + "APP- " + document.status6.app2.value + "\n"
                + "SIZ- " + document.status6.siz2.value + "\n"
                + "INT- " + document.status6.int2.value + "\n"
                + "EDU- " + document.status6.edu2.value + "\n"
                + "HP- " + document.status6.hp2.value + "\n"
                + "MP- " + document.status6.mp2.value + "\n"
                + "SAN- " + document.status6.san2.value + "\n"
                + "アイデア- " + document.status6.idea2.value + "\n"
                + "幸運- " + document.status6.luck2.value + "\n"
                + "知識- " + document.status6.know2.value + "\n"
                + "ダメージボーナス- " + document.status6.db.value + "\n"
                + "【詳細】\n"
                + document.status6.charadetail.value + "\n"
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

    var standstr = "【スタンド名】" + document.status6.standname.value + "\n"
                + "【パラメータ】\n"
                + "破壊力-" + power + "　スピード-" + speed + "　持続力-" + durability + "\n"
                + "射程距離-" + range + "　精密動作性-" + accuracy + "　成長性-" + growth + "\n"
                + "TRPG的DEX-" + document.status6.dexS.value + "\n"
                + "ダメージボーナス- " + document.status6.dbS.value + "\n"
                + "防御可能量-" + document.status6.deffenceS.value + "\n"
                + "\n"
                + "【スタンド詳細】\n"
                + document.status6.standdetail.value + "\n"
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
    link.download = document.status6.charaname.value+"6版.txt";
    link.click();
}

function chapare6(){
    var standabilitybattle = document.getElementById("standabilitybattle6");
    var standabilityaction = document.getElementById("standabilityaction6");
    var battle = document.getElementById("battle6");
    var search = document.getElementById("search6");
    var action = document.getElementById("action6");
    var negotiations = document.getElementById("negotiations6");
    var knowledge = document.getElementById("knowledge6");
    var etc = document.getElementById("etc6");

    var defpcbattlenum = defpcbattlenum6;
    var defpcsearchnum = defpcsearchnum6;
    var defpcactionnum = defpcactionnum6;
    var defpcnegotiationsnum = defpcnegotiationsnum6;
    var defpcknowledgenum = defpcknowledgenum6;
    var defstandbattlenum = defstandbattlenum6;
    var defstandactionnum = defstandactionnum6;

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
    if(document.status6.usestand.value == "true"){
        isstandstr = true;
    }else{
        isstandstr = false;
    }

    for(let table = 0; table < standabilitybattle.rows.length-1; table++){
        if(table < defstandbattlenum){
            if(standabilitybattle.rows[table+1].cells[1].innerHTML.includes("input")){
                standstatusB += "CCB<=" + document.getElementsByName("tostandabilitybattle6"+table)[0].value + " 【" 
                                + standabilitybattle.rows[table+1].cells[1].innerText
                                + document.getElementsByName("standabilitybattlename6"+table)[0].value + "】\n";
            }else{
                standstatusB += "CCB<=" + document.getElementsByName("tostandabilitybattle6"+table)[0].value + " 【" 
                                + standabilitybattle.rows[table+1].cells[1].innerText + "】\n";
            }
            
            
        }else{
            standstatusB += "CCB<=" + document.getElementsByName("tostandabilitybattle6"+table)[0].value + " 【" 
            + document.getElementsByName("standabilitybattlename6"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < standabilityaction.rows.length-1; table++){
        if(table < defstandactionnum){
            if(standabilityaction.rows[table+1].cells[1].innerHTML.includes("input")){
                standstatusA += "CCB<=" + document.getElementsByName("tostandabilityaction6"+table)[0].value + " 【" 
                                + standabilityaction.rows[table+1].cells[1].innerText
                                + document.getElementsByName("standabilityactionname6"+table)[0].value + "】\n";
            }else{
                standstatusA += "CCB<=" + document.getElementsByName("tostandabilityaction6"+table)[0].value + " 【" 
                                + standabilityaction.rows[table+1].cells[1].innerText + "】\n";
            }
            
            
        }else{
            standstatusA += "CCB<=" + document.getElementsByName("tostandabilityaction6"+table)[0].value + " 【" 
            + document.getElementsByName("standabilityactionname6"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < battle.rows.length-1; table++){
        if(table < defpcbattlenum){
            if(battle.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusB += "CCB<=" + document.getElementsByName("tobattle6"+table)[0].value + " 【"
                            + battle.rows[table+1].cells[1].innerText
                            + document.getElementsByName("battlename6"+table)[0].value + "】\n";
            }else{
                pcstatusB += "CCB<=" + document.getElementsByName("tobattle6"+table)[0].value + " 【"
                            + battle.rows[table+1].cells[1].innerText + "】\n";
            }
        
        }else{
            pcstatusB += "CCB<=" + document.getElementsByName("tobattle6"+table)[0].value + " 【"
            + document.getElementsByName("battlename6"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < search.rows.length-1; table++){
        if(table < defpcsearchnum){
            if(search.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusS += "CCB<=" + document.getElementsByName("tosearch6"+table)[0].value + " 【"
                            + search.rows[table+1].cells[1].innerText
                            + document.getElementsByName("searchname6"+table)[0].value + "】\n";
            }else{
                pcstatusS += "CCB<=" + document.getElementsByName("tosearch6"+table)[0].value + " 【"
                            + search.rows[table+1].cells[1].innerText + "】\n";
            }
        
        }else{
            pcstatusS += "CCB<=" + document.getElementsByName("tosearch6"+table)[0].value + " 【"
            + document.getElementsByName("searchname6"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < action.rows.length-1; table++){
        if(table < defpcactionnum){
            if(action.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusA += "CCB<=" + document.getElementsByName("toaction6"+table)[0].value + " 【"
                            + action.rows[table+1].cells[1].innerText
                            + document.getElementsByName("actionname6"+table)[0].value + "】\n";
            }else{
                pcstatusA += "CCB<=" + document.getElementsByName("toaction6"+table)[0].value + " 【"
                            + action.rows[table+1].cells[1].innerText + "】\n";
            }
        
        }else{
            pcstatusA += "CCB<=" + document.getElementsByName("toaction6"+table)[0].value + " 【"
            + document.getElementsByName("actionname6"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < negotiations.rows.length-1; table++){
        if(table < defpcnegotiationsnum){
            if(negotiations.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusN += "CCB<=" + document.getElementsByName("tonegotiations6"+table)[0].value + " 【"
                            + negotiations.rows[table+1].cells[1].innerText
                            + document.getElementsByName("negotiationsname6"+table)[0].value + "】\n";
            }else{
                pcstatusN += "CCB<=" + document.getElementsByName("tonegotiations6"+table)[0].value + " 【"
                            + negotiations.rows[table+1].cells[1].innerText + "】\n";
            }
        
        }else{
            pcstatusN += "CCB<=" + document.getElementsByName("tonegotiations6"+table)[0].value + " 【"
            + document.getElementsByName("negotiationsname6"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < knowledge.rows.length-1; table++){
        if(table < defpcknowledgenum){
            if(knowledge.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusK += "CCB<=" + document.getElementsByName("toknowledge6"+table)[0].value + " 【"
                            + knowledge.rows[table+1].cells[1].innerText
                            + document.getElementsByName("knowledgename6"+table)[0].value + "】\n";
            }else{
                pcstatusK += "CCB<=" + document.getElementsByName("toknowledge6"+table)[0].value + " 【"
                            + knowledge.rows[table+1].cells[1].innerText + "】\n";
            }
        
        }else{
            pcstatusK += "CCB<=" + document.getElementsByName("toknowledge6"+table)[0].value + " 【"
            + document.getElementsByName("knowledgename6"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < etc.rows.length-1; table++){
        pcstatusE += "CCB<=" + document.getElementsByName("toetc6"+table)[0].value + " 【"
        + document.getElementsByName("etcname6"+table)[0].value + "】\n";
    
    }

    var statusdice = "";

    statusdice += "CC<={SAN} 【SANC】\n"
                + "CCB<="+document.status6.idea2.value+" 【アイデア】\n"
                + "CCB<="+document.status6.luck2.value+" 【幸運】\n"
                + "CCB<="+document.status6.know2.value+" 【知識】\n"

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
    
    sheet.data.name = document.status6.charaname.value;
    sheet.data.initiative = Number(document.status6.dex2.value);
    sheet.data.commands = pcstr;

    sheet.data.status[0].value = Number(document.status6.hp2.value);
    sheet.data.status[0].max = Number(document.status6.hp2.value);
    sheet.data.status[1].value = Number(document.status6.mp2.value);
    sheet.data.status[1].max = Number(document.status6.mp2.value);
    sheet.data.status[2].value = Number(document.status6.san2.value);
    sheet.data.status[2].max = Number(document.status6.san2.value);

    sheet.data.parameter[0].value = Number(document.status6.idea2.value);
    sheet.data.parameter[1].value = Number(document.status6.luck2.value);
    sheet.data.parameter[2].value = Number(document.status6.know2.value);

    const data = JSON.stringify(sheet);
    navigator.clipboard.writeText(data);
    document.getElementById("coco6").innerText = "クリップボードにコピー済み";
    /*
    let ary = pcstr.split('');
    let blob = new Blob(ary,{type:"text/plan"});
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    //link.download = "test.txt";
    link.download = document.status6.charaname.value + "のチャパレ6版.txt";
    link.click();
    */
}

function savepage6(){
    const sheet = {
        version: "1.1.0",
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
            str: [0, 0, 0],
            con: [0, 0, 0],
            pow: [0, 0, 0],
            dex: [0, 0, 0],
            app: [0, 0, 0],
            siz: [0, 0, 0],
            int: [0, 0, 0],
            edu: [0, 0, 0],
            hp: [0, 0, 0],
            mp: [0, 0, 0],
            san: [0, 0, 0],
            idea: [0, 0, 0],
            luck: [0, 0, 0],
            know: [0, 0, 0],
            db: "0",
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
            parameter: [0, 0, 0, 0, 0, 0, 0],
            db: "-2d6",
            deffence: "0",
            mpcost: 5,
            battle: [],
            action: []
        },
    };
    
    
    
    sheet.pcdetail.name = document.status6.charaname.value;
    sheet.pcdetail.usestand = document.status6.usestand.value;
    sheet.pcdetail.sex = document.status6.sex.value;
    sheet.pcdetail.age = document.status6.age.value;
    sheet.pcdetail.stature = document.status6.stature.value;
    sheet.pcdetail.weight = document.status6.weight.value;
    sheet.pcdetail.from = document.status6.from.value;
    sheet.pcdetail.heir = document.status6.heir.value;
    sheet.pcdetail.eye = document.status6.eye.value;
    sheet.pcdetail.skin = document.status6.skin.value;
    sheet.pcdetail.business = document.status6.business.value;
    sheet.pcdetail.detail = document.status6.charadetail.value;

    sheet.standdetail.name = document.status6.standname.value;
    sheet.standdetail.detail = document.status6.standdetail.value;

    sheet.pcstatus.str[0] = document.status6.str0.value;
    sheet.pcstatus.str[1] = document.status6.str1.value;
    sheet.pcstatus.str[2] = document.status6.str2.value;
    sheet.pcstatus.con[0] = document.status6.con0.value;
    sheet.pcstatus.con[1] = document.status6.con1.value;
    sheet.pcstatus.con[2] = document.status6.con2.value;
    sheet.pcstatus.pow[0] = document.status6.pow0.value;
    sheet.pcstatus.pow[1] = document.status6.pow1.value;
    sheet.pcstatus.pow[2] = document.status6.pow2.value;
    sheet.pcstatus.dex[0] = document.status6.dex0.value;
    sheet.pcstatus.dex[1] = document.status6.dex1.value;
    sheet.pcstatus.dex[2] = document.status6.dex2.value;
    sheet.pcstatus.app[0] = document.status6.app0.value;
    sheet.pcstatus.app[1] = document.status6.app1.value;
    sheet.pcstatus.app[2] = document.status6.app2.value;
    sheet.pcstatus.siz[0] = document.status6.siz0.value;
    sheet.pcstatus.siz[1] = document.status6.siz1.value;
    sheet.pcstatus.siz[2] = document.status6.siz2.value;
    sheet.pcstatus.int[0] = document.status6.int0.value;
    sheet.pcstatus.int[1] = document.status6.int1.value;
    sheet.pcstatus.int[2] = document.status6.int2.value;
    sheet.pcstatus.edu[0] = document.status6.edu0.value;
    sheet.pcstatus.edu[1] = document.status6.edu1.value;
    sheet.pcstatus.edu[2] = document.status6.edu2.value;
    sheet.pcstatus.hp[0] = document.status6.hp0.value;
    sheet.pcstatus.hp[1] = document.status6.hp1.value;
    sheet.pcstatus.hp[2] = document.status6.hp2.value;
    sheet.pcstatus.mp[0] = document.status6.mp0.value;
    sheet.pcstatus.mp[1] = document.status6.mp1.value;
    sheet.pcstatus.mp[2] = document.status6.mp2.value;
    sheet.pcstatus.san[0] = document.status6.san0.value;
    sheet.pcstatus.san[1] = document.status6.san1.value;
    sheet.pcstatus.san[2] = document.status6.san2.value;
    sheet.pcstatus.idea[0] = document.status6.idea0.value;
    sheet.pcstatus.idea[1] = document.status6.idea1.value;
    sheet.pcstatus.idea[2] = document.status6.idea2.value;
    sheet.pcstatus.luck[0] = document.status6.luck0.value;
    sheet.pcstatus.luck[1] = document.status6.luck1.value;
    sheet.pcstatus.luck[2] = document.status6.luck2.value;
    sheet.pcstatus.know[0] = document.status6.know0.value;
    sheet.pcstatus.know[1] = document.status6.know1.value;
    sheet.pcstatus.know[2] = document.status6.know2.value;

    sheet.pcstatus.db    =    document.status6.db.value;
    sheet.pcstatus.bp[0] = document.status6.curBP.value;
    sheet.pcstatus.bp[1] = document.status6.maxBP.value;
    sheet.pcstatus.ip[0] = document.status6.curIP.value;
    sheet.pcstatus.ip[1] = document.status6.maxIP.value;
    sheet.pcstatus.sp[0] = document.status6.curSP.value;
    sheet.pcstatus.sp[1] = document.status6.maxSP.value;

    sheet.standstatus.parameter[0] = document.status6.power.value;
    sheet.standstatus.parameter[1] = document.status6.speed.value;
    sheet.standstatus.parameter[2] = document.status6.durability.value;
    sheet.standstatus.parameter[3] = document.status6.range.value;
    sheet.standstatus.parameter[4] = document.status6.accuracy.value;
    sheet.standstatus.parameter[5] = document.status6.growth.value;
    sheet.standstatus.parameter[6] = document.status6.dexS.value;
    sheet.standstatus.db =           document.status6.dbS.value;
    sheet.standstatus.deffence =     document.status6.deffenceS.value;
    sheet.standstatus.mpcost =       document.status6.usempS.value;

    var standabilitybattle = document.getElementById("standabilitybattle6");
    var standabilityaction = document.getElementById("standabilityaction6");
    var battle = document.getElementById("battle6");
    var search = document.getElementById("search6");
    var action = document.getElementById("action6");
    var negotiations = document.getElementById("negotiations6");
    var knowledge = document.getElementById("knowledge6");
    var etc = document.getElementById("etc6");
    var items = document.getElementById("items6");

    var defpcbattlenum = defpcbattlenum6;
    var defpcsearchnum = defpcsearchnum6;
    var defpcactionnum = defpcactionnum6;
    var defpcnegotiationsnum = defpcnegotiationsnum6;
    var defpcknowledgenum = defpcknowledgenum6;
    var defstandbattlenum = defstandbattlenum6;
    var defstandactionnum = defstandactionnum6;

    for(let table = 0; table < standabilitybattle.rows.length-1; table++){
        let standstatus = {
            isinput: false,
            growth: false,
            name: "技能名",
            inputname: "()",
            num: [0, 0, 0, 0, 0]
        }
        standstatus.growth = document.getElementsByName("chstandabilitybattle6"+table)[0].checked;
        if(table < defstandbattlenum){
            standstatus.name = standabilitybattle.rows[table+1].cells[1].innerText;
            if(standabilitybattle.rows[table+1].cells[1].innerHTML.includes("input")){
                standstatus.isinput = true;
                standstatus.inputname = document.getElementsByName("standabilitybattlename6"+table)[0].value;
            }else{
                standstatus.isinput = false;
                standstatus.inputname = "";
            }
            
        }else{
            standstatus.name = document.getElementsByName("standabilitybattlename6"+table)[0].value;
            standstatus.isinput = false;
            standstatus.inputname = "";
        }
        standstatus.num[0] = document.getElementsByName("defstandabilitybattle6"+table)[0].value;
        standstatus.num[1] = document.getElementsByName("corstandabilitybattle6"+table)[0].value;
        standstatus.num[2] = document.getElementsByName("plstandabilitybattle6"+table)[0].value;
        standstatus.num[3] = document.getElementsByName("addstandabilitybattle6"+table)[0].value;
        standstatus.num[4] = document.getElementsByName("tostandabilitybattle6"+table)[0].value;
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
        standstatus.growth = document.getElementsByName("chstandabilityaction6"+table)[0].checked;
        if(table < defstandactionnum){
            standstatus.name = standabilityaction.rows[table+1].cells[1].innerText;
            if(standabilityaction.rows[table+1].cells[1].innerHTML.includes("input")){
                standstatus.isinput = true;
                standstatus.inputname = document.getElementsByName("standabilityactionname6"+table)[0].value;
            }else{
                standstatus.isinput = false;
                standstatus.inputname = "";
            }
            
        }else{
            standstatus.name = document.getElementsByName("standabilityactionname6"+table)[0].value;
            standstatus.isinput = false;
            standstatus.inputname = "";
        }
        standstatus.num[0] = document.getElementsByName("defstandabilityaction6"+table)[0].value;
        standstatus.num[1] = document.getElementsByName("corstandabilityaction6"+table)[0].value;
        standstatus.num[2] = document.getElementsByName("plstandabilityaction6"+table)[0].value;
        standstatus.num[3] = document.getElementsByName("addstandabilityaction6"+table)[0].value;
        standstatus.num[4] = document.getElementsByName("tostandabilityaction6"+table)[0].value;
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
        pcstatus.growth = document.getElementsByName("chbattle6"+table)[0].checked;
        if(table < defpcbattlenum){
            pcstatus.name = battle.rows[table+1].cells[1].innerText;
            if(battle.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatus.isinput = true;
                pcstatus.inputname = document.getElementsByName("battlename6"+table)[0].value;
            }else{
                pcstatus.isinput = false;
                pcstatus.inputname = "";
            }
        
        }else{
            pcstatus.name = document.getElementsByName("battlename6"+table)[0].value;
            pcstatus.isinput = false;
            pcstatus.inputname = "";
        }
        pcstatus.num[0] = document.getElementsByName("defbattle6"+table)[0].value;
        pcstatus.num[1] = document.getElementsByName("bpbattle6"+table)[0].value;
        pcstatus.num[2] = document.getElementsByName("ipbattle6"+table)[0].value;
        pcstatus.num[3] = document.getElementsByName("plbattle6"+table)[0].value;
        pcstatus.num[4] = document.getElementsByName("addbattle6"+table)[0].value;
        pcstatus.num[5] = document.getElementsByName("tobattle6"+table)[0].value;
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
        pcstatus.growth = document.getElementsByName("chsearch6"+table)[0].checked;
        if(table < defpcsearchnum){
            pcstatus.name = search.rows[table+1].cells[1].innerText;
            if(search.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatus.isinput = true;
                pcstatus.inputname = document.getElementsByName("searchname6"+table)[0].value;
            }else{
                pcstatus.isinput = false;
                pcstatus.inputname = "";
            }
        
        }else{
            pcstatus.name = document.getElementsByName("searchname6"+table)[0].value;
            pcstatus.isinput = false;
            pcstatus.inputname = "";
        }
        pcstatus.num[0] = document.getElementsByName("defsearch6"+table)[0].value;
        pcstatus.num[1] = document.getElementsByName("bpsearch6"+table)[0].value;
        pcstatus.num[2] = document.getElementsByName("ipsearch6"+table)[0].value;
        pcstatus.num[3] = document.getElementsByName("plsearch6"+table)[0].value;
        pcstatus.num[4] = document.getElementsByName("addsearch6"+table)[0].value;
        pcstatus.num[5] = document.getElementsByName("tosearch6"+table)[0].value;
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
        pcstatus.growth = document.getElementsByName("chaction6"+table)[0].checked;
        if(table < defpcactionnum){
            pcstatus.name = action.rows[table+1].cells[1].innerText;
            if(action.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatus.isinput = true;
                pcstatus.inputname = document.getElementsByName("actionname6"+table)[0].value;
            }else{
                pcstatus.isinput = false;
                pcstatus.inputname = "";
            }
        
        }else{
            pcstatus.name = document.getElementsByName("actionname6"+table)[0].value;
            pcstatus.isinput = false;
            pcstatus.inputname = "";
        }
        pcstatus.num[0] = document.getElementsByName("defaction6"+table)[0].value;
        pcstatus.num[1] = document.getElementsByName("bpaction6"+table)[0].value;
        pcstatus.num[2] = document.getElementsByName("ipaction6"+table)[0].value;
        pcstatus.num[3] = document.getElementsByName("plaction6"+table)[0].value;
        pcstatus.num[4] = document.getElementsByName("addaction6"+table)[0].value;
        pcstatus.num[5] = document.getElementsByName("toaction6"+table)[0].value;
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
        pcstatus.growth = document.getElementsByName("chnegotiations6"+table)[0].checked;
        if(table < defpcnegotiationsnum){
            pcstatus.name = negotiations.rows[table+1].cells[1].innerText;
            if(negotiations.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatus.isinput = true;
                pcstatus.inputname = document.getElementsByName("negotiationsname6"+table)[0].value;
            }else{
                pcstatus.isinput = false;
                pcstatus.inputname = "";
            }
        
        }else{
            pcstatus.name = document.getElementsByName("negotiationsname6"+table)[0].value;
            pcstatus.isinput = false;
            pcstatus.inputname = "";
        }
        pcstatus.num[0] = document.getElementsByName("defnegotiations6"+table)[0].value;
        pcstatus.num[1] = document.getElementsByName("bpnegotiations6"+table)[0].value;
        pcstatus.num[2] = document.getElementsByName("ipnegotiations6"+table)[0].value;
        pcstatus.num[3] = document.getElementsByName("plnegotiations6"+table)[0].value;
        pcstatus.num[4] = document.getElementsByName("addnegotiations6"+table)[0].value;
        pcstatus.num[5] = document.getElementsByName("tonegotiations6"+table)[0].value;
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
        pcstatus.growth = document.getElementsByName("chknowledge6"+table)[0].checked;
        if(table < defpcknowledgenum){
            pcstatus.name = knowledge.rows[table+1].cells[1].innerText;
            if(knowledge.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatus.isinput = true;
                pcstatus.inputname = document.getElementsByName("knowledgename6"+table)[0].value;
            }else{
                pcstatus.isinput = false;
                pcstatus.inputname = "";
            }
        
        }else{
            pcstatus.name = document.getElementsByName("knowledgename6"+table)[0].value;
            pcstatus.isinput = false;
            pcstatus.inputname = "";
        }
        pcstatus.num[0] = document.getElementsByName("defknowledge6"+table)[0].value;
        pcstatus.num[1] = document.getElementsByName("bpknowledge6"+table)[0].value;
        pcstatus.num[2] = document.getElementsByName("ipknowledge6"+table)[0].value;
        pcstatus.num[3] = document.getElementsByName("plknowledge6"+table)[0].value;
        pcstatus.num[4] = document.getElementsByName("addknowledge6"+table)[0].value;
        pcstatus.num[5] = document.getElementsByName("toknowledge6"+table)[0].value;
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
        pcstatus.growth = document.getElementsByName("chetc6"+table)[0].checked;
        pcstatus.name = document.getElementsByName("etcname6"+table)[0].value;
        pcstatus.isinput = false;
        pcstatus.inputname = "";
        pcstatus.num[0] = document.getElementsByName("defetc6"+table)[0].value;
        pcstatus.num[1] = document.getElementsByName("bpetc6"+table)[0].value;
        pcstatus.num[2] = document.getElementsByName("ipetc6"+table)[0].value;
        pcstatus.num[3] = document.getElementsByName("pletc6"+table)[0].value;
        pcstatus.num[4] = document.getElementsByName("addetc6"+table)[0].value;
        pcstatus.num[5] = document.getElementsByName("toetc6"+table)[0].value;
        sheet.pcstatus.etc.push(pcstatus);
    }
    for(let table = 0; table < items.rows.length-1; table++){
        let itemsdata = {
            name: "names",
            num: "0",
            detail: "見本"
        };
        itemsdata.name = document.getElementsByName("itemsname6"+table)[0].value;
        itemsdata.num = document.getElementsByName("itemsnum6"+table)[0].value;
        itemsdata.detail = document.getElementsByName("itemsdetail6"+table)[0].value;
        sheet.items.push(itemsdata);
    }
    
    const data = JSON.stringify(sheet);
    const link = document.createElement("a");

    link.href = "data:text/plain," + encodeURIComponent(data);
    link.download = document.status6.charaname.value+"6版.json";
    link.click();
}

function loadpage6(input){
    let reader = new FileReader();
    let buf;
    reader.onload = (evt) => {
        buf = evt.target.result;
        console.log(buf);
        const sheet = JSON.parse(buf);
        document.status6.charaname.value = sheet.pcdetail.name;
        document.status6.usestand.value = sheet.pcdetail.usestand;
        document.status6.sex.value = sheet.pcdetail.sex;
        document.status6.age.value = sheet.pcdetail.age;
        document.status6.stature.value = sheet.pcdetail.stature;
        document.status6.weight.value = sheet.pcdetail.weight;
        document.status6.from.value = sheet.pcdetail.from;
        document.status6.heir.value = sheet.pcdetail.heir;
        document.status6.eye.value = sheet.pcdetail.eye;
        document.status6.skin.value = sheet.pcdetail.skin;
        document.status6.business.value = sheet.pcdetail.business;
        document.status6.charadetail.value = sheet.pcdetail.detail;

        document.status6.standname.value = sheet.standdetail.name;
        document.status6.standdetail.value = sheet.standdetail.detail;

        document.status6.str0.value = sheet.pcstatus.str[0];
        document.status6.str1.value = sheet.pcstatus.str[1];
        document.status6.str2.value = sheet.pcstatus.str[2];
        document.status6.con0.value = sheet.pcstatus.con[0];
        document.status6.con1.value = sheet.pcstatus.con[1];
        document.status6.con2.value = sheet.pcstatus.con[2];
        document.status6.pow0.value = sheet.pcstatus.pow[0];
        document.status6.pow1.value = sheet.pcstatus.pow[1];
        document.status6.pow2.value = sheet.pcstatus.pow[2];
        document.status6.dex0.value = sheet.pcstatus.dex[0];
        document.status6.dex1.value = sheet.pcstatus.dex[1];
        document.status6.dex2.value = sheet.pcstatus.dex[2];
        document.status6.app0.value = sheet.pcstatus.app[0];
        document.status6.app1.value = sheet.pcstatus.app[1];
        document.status6.app2.value = sheet.pcstatus.app[2];
        document.status6.siz0.value = sheet.pcstatus.siz[0];
        document.status6.siz1.value = sheet.pcstatus.siz[1];
        document.status6.siz2.value = sheet.pcstatus.siz[2];
        document.status6.int0.value = sheet.pcstatus.int[0];
        document.status6.int1.value = sheet.pcstatus.int[1];
        document.status6.int2.value = sheet.pcstatus.int[2];
        document.status6.edu0.value = sheet.pcstatus.edu[0];
        document.status6.edu1.value = sheet.pcstatus.edu[1];
        document.status6.edu2.value = sheet.pcstatus.edu[2];
        document.status6.hp0.value = sheet.pcstatus.hp[0];
        document.status6.hp1.value = sheet.pcstatus.hp[1];
        document.status6.hp2.value = sheet.pcstatus.hp[2];
        document.status6.mp0.value = sheet.pcstatus.mp[0];
        document.status6.mp1.value = sheet.pcstatus.mp[1];
        document.status6.mp2.value = sheet.pcstatus.mp[2];
        document.status6.san0.value = sheet.pcstatus.san[0];
        document.status6.san1.value = sheet.pcstatus.san[1];
        document.status6.san2.value = sheet.pcstatus.san[2];
        document.status6.idea0.value = sheet.pcstatus.idea[0];
        document.status6.idea1.value = sheet.pcstatus.idea[1];
        document.status6.idea2.value = sheet.pcstatus.idea[2];
        document.status6.luck0.value = sheet.pcstatus.luck[0];
        document.status6.luck1.value = sheet.pcstatus.luck[1];
        document.status6.luck2.value = sheet.pcstatus.luck[2];
        document.status6.know0.value = sheet.pcstatus.know[0];
        document.status6.know1.value = sheet.pcstatus.know[1];
        document.status6.know2.value = sheet.pcstatus.know[2];

        document.status6.db.value = sheet.pcstatus.db;
        document.status6.curBP.value = sheet.pcstatus.bp[0];
        document.status6.maxBP.value = sheet.pcstatus.bp[1];
        document.status6.curIP.value = sheet.pcstatus.ip[0];
        document.status6.maxIP.value = sheet.pcstatus.ip[1];
        document.status6.curSP.value = sheet.pcstatus.sp[0];
        document.status6.maxSP.value = sheet.pcstatus.sp[1];

        document.status6.power.value = sheet.standstatus.parameter[0];
        document.status6.speed.value = sheet.standstatus.parameter[1];
        document.status6.durability.value = sheet.standstatus.parameter[2];
        document.status6.range.value = sheet.standstatus.parameter[3];
        document.status6.accuracy.value = sheet.standstatus.parameter[4];
        document.status6.growth.value = sheet.standstatus.parameter[5];
        document.status6.dexS.value = sheet.standstatus.parameter[6];
        document.status6.dbS.value = sheet.standstatus.db;
        document.status6.deffenceS.value = sheet.standstatus.deffence;
        document.status6.usempS.value = sheet.standstatus.mpcost;

        loadaddpc(6, "battle", sheet.pcstatus.battle);
        loadaddpc(6, "search", sheet.pcstatus.search);
        loadaddpc(6, "action", sheet.pcstatus.action);
        loadaddpc(6, "negotiations", sheet.pcstatus.negotiations);
        loadaddpc(6, "knowledge", sheet.pcstatus.knowledge);
        loadaddpc(6, "etc", sheet.pcstatus.etc);

        loadaddstand(6, "battle", sheet.standstatus.battle);
        loadaddstand(6, "action", sheet.standstatus.action);

        loadadditems(6, sheet.items);
    };
    reader.readAsText(input.files[0], "UTF-8");
    //let data = JSON.parse(reader.result);
}

function savepageS6(){
    const sheet = {
        version: "1.1.0",
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
            str: [0, 0, 0],
            con: [0, 0, 0],
            pow: [0, 0, 0],
            dex: [0, 0, 0],
            app: [0, 0, 0],
            siz: [0, 0, 0],
            int: [0, 0, 0],
            edu: [0, 0, 0],
            hp: [0, 0, 0],
            mp: [0, 0, 0],
            san: [0, 0, 0],
            idea: [0, 0, 0],
            luck: [0, 0, 0],
            know: [0, 0, 0],
            db: "0",
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
            parameter: [0, 0, 0, 0, 0, 0, 0],
            db: "-2d6",
            deffence: "0",
            mpcost: 5,
            battle: [],
            action: []
        },
    };
    
    
    
    sheet.pcdetail.name = document.status6.charaname.value;
    sheet.pcdetail.usestand = document.status6.usestand.value;
    sheet.pcdetail.sex = document.status6.sex.value;
    sheet.pcdetail.age = document.status6.age.value;
    sheet.pcdetail.stature = document.status6.stature.value;
    sheet.pcdetail.weight = document.status6.weight.value;
    sheet.pcdetail.from = document.status6.from.value;
    sheet.pcdetail.heir = document.status6.heir.value;
    sheet.pcdetail.eye = document.status6.eye.value;
    sheet.pcdetail.skin = document.status6.skin.value;
    sheet.pcdetail.business = document.status6.business.value;
    sheet.pcdetail.detail = document.status6.charadetail.value;

    sheet.standdetail.name = document.status6.standname.value;
    sheet.standdetail.detail = document.status6.standdetail.value;

    sheet.pcstatus.str[0] = document.status6.str0.value;
    sheet.pcstatus.str[1] = document.status6.str1.value;
    sheet.pcstatus.str[2] = document.status6.str2.value;
    sheet.pcstatus.con[0] = document.status6.con0.value;
    sheet.pcstatus.con[1] = document.status6.con1.value;
    sheet.pcstatus.con[2] = document.status6.con2.value;
    sheet.pcstatus.pow[0] = document.status6.pow0.value;
    sheet.pcstatus.pow[1] = document.status6.pow1.value;
    sheet.pcstatus.pow[2] = document.status6.pow2.value;
    sheet.pcstatus.dex[0] = document.status6.dex0.value;
    sheet.pcstatus.dex[1] = document.status6.dex1.value;
    sheet.pcstatus.dex[2] = document.status6.dex2.value;
    sheet.pcstatus.app[0] = document.status6.app0.value;
    sheet.pcstatus.app[1] = document.status6.app1.value;
    sheet.pcstatus.app[2] = document.status6.app2.value;
    sheet.pcstatus.siz[0] = document.status6.siz0.value;
    sheet.pcstatus.siz[1] = document.status6.siz1.value;
    sheet.pcstatus.siz[2] = document.status6.siz2.value;
    sheet.pcstatus.int[0] = document.status6.int0.value;
    sheet.pcstatus.int[1] = document.status6.int1.value;
    sheet.pcstatus.int[2] = document.status6.int2.value;
    sheet.pcstatus.edu[0] = document.status6.edu0.value;
    sheet.pcstatus.edu[1] = document.status6.edu1.value;
    sheet.pcstatus.edu[2] = document.status6.edu2.value;
    sheet.pcstatus.hp[0] = document.status6.hp0.value;
    sheet.pcstatus.hp[1] = document.status6.hp1.value;
    sheet.pcstatus.hp[2] = document.status6.hp2.value;
    sheet.pcstatus.mp[0] = document.status6.mp0.value;
    sheet.pcstatus.mp[1] = document.status6.mp1.value;
    sheet.pcstatus.mp[2] = document.status6.mp2.value;
    sheet.pcstatus.san[0] = document.status6.san0.value;
    sheet.pcstatus.san[1] = document.status6.san1.value;
    sheet.pcstatus.san[2] = document.status6.san2.value;
    sheet.pcstatus.idea[0] = document.status6.idea0.value;
    sheet.pcstatus.idea[1] = document.status6.idea1.value;
    sheet.pcstatus.idea[2] = document.status6.idea2.value;
    sheet.pcstatus.luck[0] = document.status6.luck0.value;
    sheet.pcstatus.luck[1] = document.status6.luck1.value;
    sheet.pcstatus.luck[2] = document.status6.luck2.value;
    sheet.pcstatus.know[0] = document.status6.know0.value;
    sheet.pcstatus.know[1] = document.status6.know1.value;
    sheet.pcstatus.know[2] = document.status6.know2.value;

    sheet.pcstatus.db    =    document.status6.db.value;
    sheet.pcstatus.bp[0] = document.status6.curBP.value;
    sheet.pcstatus.bp[1] = document.status6.maxBP.value;
    sheet.pcstatus.ip[0] = document.status6.curIP.value;
    sheet.pcstatus.ip[1] = document.status6.maxIP.value;
    sheet.pcstatus.sp[0] = document.status6.curSP.value;
    sheet.pcstatus.sp[1] = document.status6.maxSP.value;

    sheet.standstatus.parameter[0] = document.status6.power.value;
    sheet.standstatus.parameter[1] = document.status6.speed.value;
    sheet.standstatus.parameter[2] = document.status6.durability.value;
    sheet.standstatus.parameter[3] = document.status6.range.value;
    sheet.standstatus.parameter[4] = document.status6.accuracy.value;
    sheet.standstatus.parameter[5] = document.status6.growth.value;
    sheet.standstatus.parameter[6] = document.status6.dexS.value;
    sheet.standstatus.db =           document.status6.dbS.value;
    sheet.standstatus.deffence =     document.status6.deffenceS.value;
    sheet.standstatus.mpcost =       document.status6.usempS.value;

    var standabilitybattle = document.getElementById("standabilitybattle6");
    var standabilityaction = document.getElementById("standabilityaction6");
    var battle = document.getElementById("battle6");
    var search = document.getElementById("search6");
    var action = document.getElementById("action6");
    var negotiations = document.getElementById("negotiations6");
    var knowledge = document.getElementById("knowledge6");
    var etc = document.getElementById("etc6");
    var items = document.getElementById("items6");

    var defpcbattlenum = defpcbattlenum6;
    var defpcsearchnum = defpcsearchnum6;
    var defpcactionnum = defpcactionnum6;
    var defpcnegotiationsnum = defpcnegotiationsnum6;
    var defpcknowledgenum = defpcknowledgenum6;
    var defstandbattlenum = defstandbattlenum6;
    var defstandactionnum = defstandactionnum6;

    for(let table = 0; table < standabilitybattle.rows.length-1; table++){
        let standstatus = {
            isinput: false,
            growth: false,
            name: "技能名",
            inputname: "()",
            num: [0, 0, 0, 0, 0]
        }
        standstatus.growth = document.getElementsByName("chstandabilitybattle6"+table)[0].checked;
        if(table < defstandbattlenum){
            standstatus.name = standabilitybattle.rows[table+1].cells[1].innerText;
            if(standabilitybattle.rows[table+1].cells[1].innerHTML.includes("input")){
                standstatus.isinput = true;
                standstatus.inputname = document.getElementsByName("standabilitybattlename6"+table)[0].value;
            }else{
                standstatus.isinput = false;
                standstatus.inputname = "";
            }
            
        }else{
            standstatus.name = document.getElementsByName("standabilitybattlename6"+table)[0].value;
            standstatus.isinput = false;
            standstatus.inputname = "";
        }
        standstatus.num[0] = document.getElementsByName("defstandabilitybattle6"+table)[0].value;
        standstatus.num[1] = document.getElementsByName("corstandabilitybattle6"+table)[0].value;
        standstatus.num[2] = document.getElementsByName("plstandabilitybattle6"+table)[0].value;
        standstatus.num[3] = document.getElementsByName("addstandabilitybattle6"+table)[0].value;
        standstatus.num[4] = document.getElementsByName("tostandabilitybattle6"+table)[0].value;
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
        standstatus.growth = document.getElementsByName("chstandabilityaction6"+table)[0].checked;
        if(table < defstandactionnum){
            standstatus.name = standabilityaction.rows[table+1].cells[1].innerText;
            if(standabilityaction.rows[table+1].cells[1].innerHTML.includes("input")){
                standstatus.isinput = true;
                standstatus.inputname = document.getElementsByName("standabilityactionname6"+table)[0].value;
            }else{
                standstatus.isinput = false;
                standstatus.inputname = "";
            }
            
        }else{
            standstatus.name = document.getElementsByName("standabilityactionname6"+table)[0].value;
            standstatus.isinput = false;
            standstatus.inputname = "";
        }
        standstatus.num[0] = document.getElementsByName("defstandabilityaction6"+table)[0].value;
        standstatus.num[1] = document.getElementsByName("corstandabilityaction6"+table)[0].value;
        standstatus.num[2] = document.getElementsByName("plstandabilityaction6"+table)[0].value;
        standstatus.num[3] = document.getElementsByName("addstandabilityaction6"+table)[0].value;
        standstatus.num[4] = document.getElementsByName("tostandabilityaction6"+table)[0].value;
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
        pcstatus.growth = document.getElementsByName("chbattle6"+table)[0].checked;
        if(table < defpcbattlenum){
            pcstatus.name = battle.rows[table+1].cells[1].innerText;
            if(battle.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatus.isinput = true;
                pcstatus.inputname = document.getElementsByName("battlename6"+table)[0].value;
            }else{
                pcstatus.isinput = false;
                pcstatus.inputname = "";
            }
        
        }else{
            pcstatus.name = document.getElementsByName("battlename6"+table)[0].value;
            pcstatus.isinput = false;
            pcstatus.inputname = "";
        }
        pcstatus.num[0] = document.getElementsByName("defbattle6"+table)[0].value;
        pcstatus.num[1] = document.getElementsByName("bpbattle6"+table)[0].value;
        pcstatus.num[2] = document.getElementsByName("ipbattle6"+table)[0].value;
        pcstatus.num[3] = document.getElementsByName("plbattle6"+table)[0].value;
        pcstatus.num[4] = document.getElementsByName("addbattle6"+table)[0].value;
        pcstatus.num[5] = document.getElementsByName("tobattle6"+table)[0].value;
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
        pcstatus.growth = document.getElementsByName("chsearch6"+table)[0].checked;
        if(table < defpcsearchnum){
            pcstatus.name = search.rows[table+1].cells[1].innerText;
            if(search.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatus.isinput = true;
                pcstatus.inputname = document.getElementsByName("searchname6"+table)[0].value;
            }else{
                pcstatus.isinput = false;
                pcstatus.inputname = "";
            }
        
        }else{
            pcstatus.name = document.getElementsByName("searchname6"+table)[0].value;
            pcstatus.isinput = false;
            pcstatus.inputname = "";
        }
        pcstatus.num[0] = document.getElementsByName("defsearch6"+table)[0].value;
        pcstatus.num[1] = document.getElementsByName("bpsearch6"+table)[0].value;
        pcstatus.num[2] = document.getElementsByName("ipsearch6"+table)[0].value;
        pcstatus.num[3] = document.getElementsByName("plsearch6"+table)[0].value;
        pcstatus.num[4] = document.getElementsByName("addsearch6"+table)[0].value;
        pcstatus.num[5] = document.getElementsByName("tosearch6"+table)[0].value;
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
        pcstatus.growth = document.getElementsByName("chaction6"+table)[0].checked;
        if(table < defpcactionnum){
            pcstatus.name = action.rows[table+1].cells[1].innerText;
            if(action.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatus.isinput = true;
                pcstatus.inputname = document.getElementsByName("actionname6"+table)[0].value;
            }else{
                pcstatus.isinput = false;
                pcstatus.inputname = "";
            }
        
        }else{
            pcstatus.name = document.getElementsByName("actionname6"+table)[0].value;
            pcstatus.isinput = false;
            pcstatus.inputname = "";
        }
        pcstatus.num[0] = document.getElementsByName("defaction6"+table)[0].value;
        pcstatus.num[1] = document.getElementsByName("bpaction6"+table)[0].value;
        pcstatus.num[2] = document.getElementsByName("ipaction6"+table)[0].value;
        pcstatus.num[3] = document.getElementsByName("plaction6"+table)[0].value;
        pcstatus.num[4] = document.getElementsByName("addaction6"+table)[0].value;
        pcstatus.num[5] = document.getElementsByName("toaction6"+table)[0].value;
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
        pcstatus.growth = document.getElementsByName("chnegotiations6"+table)[0].checked;
        if(table < defpcnegotiationsnum){
            pcstatus.name = negotiations.rows[table+1].cells[1].innerText;
            if(negotiations.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatus.isinput = true;
                pcstatus.inputname = document.getElementsByName("negotiationsname6"+table)[0].value;
            }else{
                pcstatus.isinput = false;
                pcstatus.inputname = "";
            }
        
        }else{
            pcstatus.name = document.getElementsByName("negotiationsname6"+table)[0].value;
            pcstatus.isinput = false;
            pcstatus.inputname = "";
        }
        pcstatus.num[0] = document.getElementsByName("defnegotiations6"+table)[0].value;
        pcstatus.num[1] = document.getElementsByName("bpnegotiations6"+table)[0].value;
        pcstatus.num[2] = document.getElementsByName("ipnegotiations6"+table)[0].value;
        pcstatus.num[3] = document.getElementsByName("plnegotiations6"+table)[0].value;
        pcstatus.num[4] = document.getElementsByName("addnegotiations6"+table)[0].value;
        pcstatus.num[5] = document.getElementsByName("tonegotiations6"+table)[0].value;
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
        pcstatus.growth = document.getElementsByName("chknowledge6"+table)[0].checked;
        if(table < defpcknowledgenum){
            pcstatus.name = knowledge.rows[table+1].cells[1].innerText;
            if(knowledge.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatus.isinput = true;
                pcstatus.inputname = document.getElementsByName("knowledgename6"+table)[0].value;
            }else{
                pcstatus.isinput = false;
                pcstatus.inputname = "";
            }
        
        }else{
            pcstatus.name = document.getElementsByName("knowledgename6"+table)[0].value;
            pcstatus.isinput = false;
            pcstatus.inputname = "";
        }
        pcstatus.num[0] = document.getElementsByName("defknowledge6"+table)[0].value;
        pcstatus.num[1] = document.getElementsByName("bpknowledge6"+table)[0].value;
        pcstatus.num[2] = document.getElementsByName("ipknowledge6"+table)[0].value;
        pcstatus.num[3] = document.getElementsByName("plknowledge6"+table)[0].value;
        pcstatus.num[4] = document.getElementsByName("addknowledge6"+table)[0].value;
        pcstatus.num[5] = document.getElementsByName("toknowledge6"+table)[0].value;
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
        pcstatus.growth = document.getElementsByName("chetc6"+table)[0].checked;
        pcstatus.name = document.getElementsByName("etcname6"+table)[0].value;
        pcstatus.isinput = false;
        pcstatus.inputname = "";
        pcstatus.num[0] = document.getElementsByName("defetc6"+table)[0].value;
        pcstatus.num[1] = document.getElementsByName("bpetc6"+table)[0].value;
        pcstatus.num[2] = document.getElementsByName("ipetc6"+table)[0].value;
        pcstatus.num[3] = document.getElementsByName("pletc6"+table)[0].value;
        pcstatus.num[4] = document.getElementsByName("addetc6"+table)[0].value;
        pcstatus.num[5] = document.getElementsByName("toetc6"+table)[0].value;
        sheet.pcstatus.etc.push(pcstatus);
    }
    for(let table = 0; table < items.rows.length-1; table++){
        let itemsdata = {
            name: "names",
            num: "0",
            detail: "見本"
        };
        itemsdata.name = document.getElementsByName("itemsname6"+table)[0].value;
        itemsdata.num = document.getElementsByName("itemsnum6"+table)[0].value;
        itemsdata.detail = document.getElementsByName("itemsdetail6"+table)[0].value;
        sheet.items.push(itemsdata);
    }
    
    const data = JSON.stringify(sheet);
    navigator.clipboard.writeText(data);
    document.getElementById("saveS6").innerText = "クリップボードにコピー済み";
}

function loadpageS6(){
    let buf = navigator.clipboard.readText();
    const sheet = JSON.parse(buf);
    document.status6.charaname.value = sheet.pcdetail.name;
    document.status6.usestand.value = sheet.pcdetail.usestand;
    document.status6.sex.value = sheet.pcdetail.sex;
    document.status6.age.value = sheet.pcdetail.age;
    document.status6.stature.value = sheet.pcdetail.stature;
    document.status6.weight.value = sheet.pcdetail.weight;
    document.status6.from.value = sheet.pcdetail.from;
    document.status6.heir.value = sheet.pcdetail.heir;
    document.status6.eye.value = sheet.pcdetail.eye;
    document.status6.skin.value = sheet.pcdetail.skin;
    document.status6.business.value = sheet.pcdetail.business;
    document.status6.charadetail.value = sheet.pcdetail.detail;

    document.status6.standname.value = sheet.standdetail.name;
    document.status6.standdetail.value = sheet.standdetail.detail;

    document.status6.str0.value = sheet.pcstatus.str[0];
    document.status6.str1.value = sheet.pcstatus.str[1];
    document.status6.str2.value = sheet.pcstatus.str[2];
    document.status6.con0.value = sheet.pcstatus.con[0];
    document.status6.con1.value = sheet.pcstatus.con[1];
    document.status6.con2.value = sheet.pcstatus.con[2];
    document.status6.pow0.value = sheet.pcstatus.pow[0];
    document.status6.pow1.value = sheet.pcstatus.pow[1];
    document.status6.pow2.value = sheet.pcstatus.pow[2];
    document.status6.dex0.value = sheet.pcstatus.dex[0];
    document.status6.dex1.value = sheet.pcstatus.dex[1];
    document.status6.dex2.value = sheet.pcstatus.dex[2];
    document.status6.app0.value = sheet.pcstatus.app[0];
    document.status6.app1.value = sheet.pcstatus.app[1];
    document.status6.app2.value = sheet.pcstatus.app[2];
    document.status6.siz0.value = sheet.pcstatus.siz[0];
    document.status6.siz1.value = sheet.pcstatus.siz[1];
    document.status6.siz2.value = sheet.pcstatus.siz[2];
    document.status6.int0.value = sheet.pcstatus.int[0];
    document.status6.int1.value = sheet.pcstatus.int[1];
    document.status6.int2.value = sheet.pcstatus.int[2];
    document.status6.edu0.value = sheet.pcstatus.edu[0];
    document.status6.edu1.value = sheet.pcstatus.edu[1];
    document.status6.edu2.value = sheet.pcstatus.edu[2];
    document.status6.hp0.value = sheet.pcstatus.hp[0];
    document.status6.hp1.value = sheet.pcstatus.hp[1];
    document.status6.hp2.value = sheet.pcstatus.hp[2];
    document.status6.mp0.value = sheet.pcstatus.mp[0];
    document.status6.mp1.value = sheet.pcstatus.mp[1];
    document.status6.mp2.value = sheet.pcstatus.mp[2];
    document.status6.san0.value = sheet.pcstatus.san[0];
    document.status6.san1.value = sheet.pcstatus.san[1];
    document.status6.san2.value = sheet.pcstatus.san[2];
    document.status6.idea0.value = sheet.pcstatus.idea[0];
    document.status6.idea1.value = sheet.pcstatus.idea[1];
    document.status6.idea2.value = sheet.pcstatus.idea[2];
    document.status6.luck0.value = sheet.pcstatus.luck[0];
    document.status6.luck1.value = sheet.pcstatus.luck[1];
    document.status6.luck2.value = sheet.pcstatus.luck[2];
    document.status6.know0.value = sheet.pcstatus.know[0];
    document.status6.know1.value = sheet.pcstatus.know[1];
    document.status6.know2.value = sheet.pcstatus.know[2];

    document.status6.db.value = sheet.pcstatus.db;
    document.status6.curBP.value = sheet.pcstatus.bp[0];
    document.status6.maxBP.value = sheet.pcstatus.bp[1];
    document.status6.curIP.value = sheet.pcstatus.ip[0];
    document.status6.maxIP.value = sheet.pcstatus.ip[1];
    document.status6.curSP.value = sheet.pcstatus.sp[0];
    document.status6.maxSP.value = sheet.pcstatus.sp[1];

    document.status6.power.value = sheet.standstatus.parameter[0];
    document.status6.speed.value = sheet.standstatus.parameter[1];
    document.status6.durability.value = sheet.standstatus.parameter[2];
    document.status6.range.value = sheet.standstatus.parameter[3];
    document.status6.accuracy.value = sheet.standstatus.parameter[4];
    document.status6.growth.value = sheet.standstatus.parameter[5];
    document.status6.dexS.value = sheet.standstatus.parameter[6];
    document.status6.dbS.value = sheet.standstatus.db;
    document.status6.deffenceS.value = sheet.standstatus.deffence;
    document.status6.usempS.value = sheet.standstatus.mpcost;

    loadaddpc(6, "battle", sheet.pcstatus.battle);
    loadaddpc(6, "search", sheet.pcstatus.search);
    loadaddpc(6, "action", sheet.pcstatus.action);
    loadaddpc(6, "negotiations", sheet.pcstatus.negotiations);
    loadaddpc(6, "knowledge", sheet.pcstatus.knowledge);
    loadaddpc(6, "etc", sheet.pcstatus.etc);

    loadaddstand(6, "battle", sheet.standstatus.battle);
    loadaddstand(6, "action", sheet.standstatus.action);

    loadadditems(6, sheet.items);
}