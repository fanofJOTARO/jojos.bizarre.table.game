function calc6(){
    
    var defstr = Number(document.status.str0.value);
    var defcon = Number(document.status.con0.value);
    var defpow = Number(document.status.pow0.value);
    var defdex = Number(document.status.dex0.value);
    var defapp = Number(document.status.app0.value);
    var defsiz = Number(document.status.siz0.value);
    var defint = Number(document.status.int0.value);
    var defedu = Number(document.status.edu0.value);
    var str = defstr + Number(document.status.str1.value);
    var con = defcon + Number(document.status.con1.value);
    var pow = defpow + Number(document.status.pow1.value);
    var dex = defdex + Number(document.status.dex1.value);
    var app = defapp + Number(document.status.app1.value);
    var siz = defsiz + Number(document.status.siz1.value);
    var int = defint + Number(document.status.int1.value);
    var edu = defedu + Number(document.status.edu1.value);
    document.status.str2.value = str;
    document.status.con2.value = con;
    document.status.pow2.value = pow;
    document.status.dex2.value = dex;
    document.status.app2.value = app;
    document.status.siz2.value = siz;
    document.status.int2.value = int;
    document.status.edu2.value = edu;

    var defhp = Math.ceil((defcon+defsiz)/2);
    var defmp = defpow;
    var defsan = defpow*5;
    var defidea = defint*5;
    var defluck = defpow*5;
    var defknow = defedu*5;
    if(document.status.usestand.value == "true"){
        document.status.defbattle6.value = 50;
        document.status.defsearch9.value = 50;
        document.status.defaction8.value = 50;
        defhp *= 2;
        defmp /= 2;
        defsan /= 2;
        defluck /= 2;
    }else{
        document.status.defbattle6.value = 25;
        document.status.defsearch9.value = 40;
        document.status.defaction8.value = 25;
    }
    document.status.hp0.value = defhp;
    document.status.mp0.value = defmp;
    document.status.san0.value = defsan;
    document.status.idea0.value = defidea;
    document.status.luck0.value = defluck;
    document.status.know0.value = defknow;

    var hp = defhp + Number(document.status.hp1.value);
    var mp = defmp + Number(document.status.mp1.value);
    var san = defsan + Number(document.status.san1.value);
    var idea = defidea + Number(document.status.idea1.value);
    var luck = defluck + Number(document.status.luck1.value);
    var know = defknow + Number(document.status.know1.value);
    document.status.hp2.value = hp;
    document.status.mp2.value = mp;
    document.status.san2.value = san;
    document.status.idea2.value = idea;
    document.status.luck2.value = luck;
    document.status.know2.value = know;

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
    document.status.db.value = db;

    var bp = edu*20;
    var ip = int*10;
    var sp = pow;
    document.status.maxBP.value = bp;
    document.status.maxIP.value = ip;
    document.status.maxSP.value = sp;

    var cursp = Number(document.status.power.value)
                + Number(document.status.speed.value)
                + Number(document.status.durability.value)
                + Number(document.status.range.value)
                + Number(document.status.accuracy.value);
    document.status.curSP.value = cursp;

    document.status.defbattle2.value = dex*2;
    document.status.tobattle2.value = dex*2;
    document.status.defnegotiations4.value = edu*5;
    document.status.tonegotiations4.value = edu*5;

    var corbattlestate;
    var coractionstate;
    var abilityaccuracy;
    var dexs;
    var avoidance;
    var dbs;
    var deffences;
    var usemps;

    switch(Number(document.status.accuracy.value)){
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

    switch(Number(document.status.speed.value)){
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

    switch(Number(document.status.power.value)){
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

    switch(Number(document.status.durability.value)){
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

    const battle = document.getElementsByClassName("corstandbattle");
    const action = document.getElementsByClassName("corstandaction");
    for(let i = 0; i < battle.length; i++){
        battle[i].value = corbattlestate;
    }
    for(let i = 0; i < action.length; i++){
        action[i].value = coractionstate;
    }
    
    document.status.dexS.value = dexs;
    document.status.dbS.value = dbs;
    document.status.deffenceS.value = deffences;
    document.status.usempS.value = usemps;
    document.status.defstandabilitybattle2.value = avoidance;
    document.status.corstandabilitybattle2.value = 0;
    document.status.tostandabilitybattle2.value = avoidance;
    document.status.defstandabilityaction0.value = abilityaccuracy;
    document.status.tostandabilityaction0.value = abilityaccuracy;
    document.status.corstandabilityaction0.value = 0;

    calcstatus6();

}

function calcstatus6(){
    var standabilitybattle = document.getElementById("standabilitybattle");
    var standabilityaction = document.getElementById("standabilityaction");
    var battle = document.getElementById("battle");
    var search = document.getElementById("search");
    var action = document.getElementById("action");
    var negotiations = document.getElementById("negotiations");
    var knowledge = document.getElementById("knowledge");
    var etc = document.getElementById("etc");
    
    var allbp = 0;
    var allip = 0;
    
    for(let table = 0; table < standabilitybattle.rows.length-1; table++){
        var def = Number(document.getElementsByName("defstandabilitybattle"+table)[0].value);
        var cor = Number(document.getElementsByName("corstandabilitybattle"+table)[0].value);
        var pl = Number(document.getElementsByName("plstandabilitybattle"+table)[0].value);
        var add = Number(document.getElementsByName("addstandabilitybattle"+table)[0].value);

        var sum = def+cor+pl+add;

        document.getElementsByName("tostandabilitybattle"+table)[0].value = sum;
    }
    
    for(let table = 0; table < standabilityaction.rows.length-1; table++){
        var def = Number(document.getElementsByName("defstandabilityaction"+table)[0].value);
        var cor = Number(document.getElementsByName("corstandabilityaction"+table)[0].value);
        var pl = Number(document.getElementsByName("plstandabilityaction"+table)[0].value);
        var add = Number(document.getElementsByName("addstandabilityaction"+table)[0].value);

        var sum = def+cor+pl+add;

        document.getElementsByName("tostandabilityaction"+table)[0].value = sum;
    }

    for(let table = 0; table < battle.rows.length-1; table++){
        var def = Number(document.getElementsByName("defbattle"+table)[0].value);
        var bp = Number(document.getElementsByName("bpbattle"+table)[0].value);
        var ip = Number(document.getElementsByName("ipbattle"+table)[0].value);
        var pl = Number(document.getElementsByName("plbattle"+table)[0].value);
        var add = Number(document.getElementsByName("addbattle"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("tobattle"+table)[0].value = sum;
    }

    for(let table = 0; table < search.rows.length-1; table++){
        var def = Number(document.getElementsByName("defsearch"+table)[0].value);
        var bp = Number(document.getElementsByName("bpsearch"+table)[0].value);
        var ip = Number(document.getElementsByName("ipsearch"+table)[0].value);
        var pl = Number(document.getElementsByName("plsearch"+table)[0].value);
        var add = Number(document.getElementsByName("addsearch"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("tosearch"+table)[0].value = sum;
    }

    for(let table = 0; table < action.rows.length-1; table++){
        var def = Number(document.getElementsByName("defaction"+table)[0].value);
        var bp = Number(document.getElementsByName("bpaction"+table)[0].value);
        var ip = Number(document.getElementsByName("ipaction"+table)[0].value);
        var pl = Number(document.getElementsByName("plaction"+table)[0].value);
        var add = Number(document.getElementsByName("addaction"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("toaction"+table)[0].value = sum;
    }

    for(let table = 0; table < negotiations.rows.length-1; table++){
        var def = Number(document.getElementsByName("defnegotiations"+table)[0].value);
        var bp = Number(document.getElementsByName("bpnegotiations"+table)[0].value);
        var ip = Number(document.getElementsByName("ipnegotiations"+table)[0].value);
        var pl = Number(document.getElementsByName("plnegotiations"+table)[0].value);
        var add = Number(document.getElementsByName("addnegotiations"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("tonegotiations"+table)[0].value = sum;
    }

    for(let table = 0; table < knowledge.rows.length-1; table++){
        var def = Number(document.getElementsByName("defknowledge"+table)[0].value);
        var bp = Number(document.getElementsByName("bpknowledge"+table)[0].value);
        var ip = Number(document.getElementsByName("ipknowledge"+table)[0].value);
        var pl = Number(document.getElementsByName("plknowledge"+table)[0].value);
        var add = Number(document.getElementsByName("addknowledge"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("toknowledge"+table)[0].value = sum;
    }

    for(let table = 0; table < etc.rows.length-1; table++){
        var def = Number(document.getElementsByName("defetc"+table)[0].value);
        var bp = Number(document.getElementsByName("bpetc"+table)[0].value);
        var ip = Number(document.getElementsByName("ipetc"+table)[0].value);
        var pl = Number(document.getElementsByName("pletc"+table)[0].value);
        var add = Number(document.getElementsByName("addetc"+table)[0].value);

        var sum = def+bp+ip+pl+add;

        allbp += bp;
        allip += ip;

        document.getElementsByName("toetc"+table)[0].value = sum;
    }

    document.status.curBP.value = allbp;
    document.status.curIP.value = allip;
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
    document.status.str0.value = str;
    document.status.con0.value = con;
    if(document.status.usestand.value == "true"){
        document.status.pow0.value = pow*2;

    }else{
        document.status.pow0.value = pow;
    
    }
    document.status.dex0.value = dex;
    document.status.app0.value = app;
    document.status.siz0.value = siz;
    document.status.int0.value = int;
    document.status.edu0.value = edu;
    calc6();
}

function save6(){
    var power;
    var speed;
    var durability;
    var range;
    var accuracy;
    var growth;

    var standabilitybattle = document.getElementById("standabilitybattle");
    var standabilityaction = document.getElementById("standabilityaction");
    var battle = document.getElementById("battle");
    var search = document.getElementById("search");
    var action = document.getElementById("action");
    var negotiations = document.getElementById("negotiations");
    var knowledge = document.getElementById("knowledge");
    var etc = document.getElementById("etc");
    var items = document.getElementById("items");

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
                + document.getElementsByName("standabilitybattlename"+table)[0].value + "- " 
                + document.getElementsByName("tostandabilitybattle"+table)[0].value + "\n";
            }else{
                standstatusB += standabilitybattle.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("tostandabilitybattle"+table)[0].value + "\n";
            }
            
            
        }else{
            standstatusB += document.getElementsByName("standabilitybattlename"+table)[0].value + "- " 
                            + document.getElementsByName("tostandabilitybattle"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < standabilityaction.rows.length-1; table++){
        if(table < defstandactionnum){
            if(standabilityaction.rows[table+1].cells[1].innerHTML.includes("input")){
                standstatusA += standabilityaction.rows[table+1].cells[1].innerText
                + document.getElementsByName("standabilityactionname"+table)[0].value + "- " 
                + document.getElementsByName("tostandabilityaction"+table)[0].value + "\n";
            }else{
                standstatusA += standabilityaction.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("tostandabilityaction"+table)[0].value + "\n";
            }
        
        }else{
            standstatusA += document.getElementsByName("standabilityactionname"+table)[0].value + "- " 
                            + document.getElementsByName("tostandabilityaction"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < battle.rows.length-1; table++){
        if(document.getElementsByName("tobattle"+table)[0].value
            == document.getElementsByName("defbattle"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcbattlenum && !isinitial){
            if(battle.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusB += battle.rows[table+1].cells[1].innerText
                + document.getElementsByName("battlename"+table)[0].value + "- " 
                + document.getElementsByName("tobattle"+table)[0].value + "\n";
            }else{
                pcstatusB += battle.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("tobattle"+table)[0].value + "\n";
            }
        
        }else if(!isinitial){
            pcstatusB += document.getElementsByName("battlename"+table)[0].value + "- " 
                            + document.getElementsByName("tobattle"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < search.rows.length-1; table++){
        if(document.getElementsByName("tosearch"+table)[0].value
            == document.getElementsByName("defsearch"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcsearchnum && !isinitial){
            if(search.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusS += search.rows[table+1].cells[1].innerText
                + document.getElementsByName("searchname"+table)[0].value + "- " 
                + document.getElementsByName("tosearch"+table)[0].value + "\n";
            }else{
                pcstatusS += search.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("tosearch"+table)[0].value + "\n";
            }
        
        }else if(!isinitial){
            pcstatusS += document.getElementsByName("searchname"+table)[0].value + "- " 
                            + document.getElementsByName("tosearch"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < action.rows.length-1; table++){
        if(document.getElementsByName("toaction"+table)[0].value
            == document.getElementsByName("defaction"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcactionnum && !isinitial){
            if(action.rows[table+1].cells[1].innerHTML.includes("input")){
                
                pcstatusA += action.rows[table+1].cells[1].innerText
                + document.getElementsByName("actionname"+table)[0].value + "- " 
                + document.getElementsByName("toaction"+table)[0].value + "\n";
            }else{
                pcstatusA += action.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("toaction"+table)[0].value + "\n";
            }
        
        }else if(!isinitial){
            pcstatusA += document.getElementsByName("actionname"+table)[0].value + "- " 
                            + document.getElementsByName("toaction"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < negotiations.rows.length-1; table++){
        if(document.getElementsByName("tonegotiations"+table)[0].value
            == document.getElementsByName("defnegotiations"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcnegotiationsnum && !isinitial){
            if(negotiations.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusN += negotiations.rows[table+1].cells[1].innerText
                + document.getElementsByName("negotiationsname"+table)[0].value + "- " 
                + document.getElementsByName("tonegotiations"+table)[0].value + "\n";
            }else{
                pcstatusN += negotiations.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("tonegotiations"+table)[0].value + "\n";
            }
        
        }else if(!isinitial){
            pcstatusN += document.getElementsByName("negotiationsname"+table)[0].value + "- " 
                            + document.getElementsByName("tonegotiations"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < knowledge.rows.length-1; table++){
        if(document.getElementsByName("toknowledge"+table)[0].value
            == document.getElementsByName("defknowledge"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcknowledgenum && !isinitial){
            if(knowledge.rows[table+1].cells[1].innerHTML.includes("input")){
                pcstatusK += knowledge.rows[table+1].cells[1].innerText
                + document.getElementsByName("knowledgename"+table)[0].value + "- " 
                + document.getElementsByName("toknowledge"+table)[0].value + "\n";
            }else{
                pcstatusK += knowledge.rows[table+1].cells[1].innerText + "- " 
                + document.getElementsByName("toknowledge"+table)[0].value + "\n";
            }
        
        }else if(!isinitial){
            pcstatusK += document.getElementsByName("knowledgename"+table)[0].value + "- " 
                            + document.getElementsByName("toknowledge"+table)[0].value + "\n";
        }
    }
    for(let table = 0; table < etc.rows.length-1; table++){
        if(document.getElementsByName("toetc"+table)[0].value
            == document.getElementsByName("defetc"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(!isinitial){
            pcstatusE += document.getElementsByName("etcname"+table)[0].value + "- " 
                            + document.getElementsByName("toetc"+table)[0].value + "\n";
        }
        
    }
    for(let table = 0; table < items.rows.length-1; table++){
        itemsstr += document.getElementsByName("itemsname"+table)[0].value + " " 
                    + document.getElementsByName("itemsnum"+table)[0].value + "\n"
                    + document.getElementsByName("itemsdetail"+table)[0].value + "\n";
    
    }

    switch(Number(document.status.power.value)){
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

    switch(Number(document.status.speed.value)){
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

    switch(Number(document.status.durability.value)){
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

    switch(Number(document.status.range.value)){
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

    switch(Number(document.status.accuracy.value)){
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

    switch(Number(document.status.growth.value)){
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
    if(document.status.usestand.value == "true"){
        usestand = "(スタンド使い)";
        isstandstr = true;
    }else{
        usestand = "";
        isstandstr = false;
    }

    var pcstr = "【名前】" + document.status.charaname.value + " " + usestand + "　【性別】" + document.status.sex.value + "\n"
                + "【年齢】" + document.status.age.value + "歳　【身長】" + document.status.stature.value + "cm　【体重】" + document.status.weight.value + "kg\n"
                + "【出身】" + document.status.from.value + "\n"
                + "【髪の色】" + document.status.heir.value + "　【瞳の色】" + document.status.eye.value + "　【肌の色】" + document.status.skin.value + "\n"
                + "【職業(配属先)】" + document.status.business.value + "\n"
                + "【ステータス】\n"
                + "STR- " + document.status.str2.value + "\n"
                + "CON- " + document.status.con2.value + "\n"
                + "POW- " + document.status.pow2.value + "\n"
                + "DEX- " + document.status.dex2.value + "\n"
                + "APP- " + document.status.app2.value + "\n"
                + "SIZ- " + document.status.siz2.value + "\n"
                + "INT- " + document.status.int2.value + "\n"
                + "EDU- " + document.status.edu2.value + "\n"
                + "HP- " + document.status.hp2.value + "\n"
                + "MP- " + document.status.mp2.value + "\n"
                + "SAN- " + document.status.san2.value + "\n"
                + "アイデア- " + document.status.idea2.value + "\n"
                + "幸運- " + document.status.luck2.value + "\n"
                + "知識- " + document.status.know2.value + "\n"
                + "【詳細】\n"
                + document.status.charadetail.value + "\n"
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

    var standstr = "【スタンド名】" + document.status.standname.value + "\n"
                + "【パラメータ】\n"
                + "破壊力-" + power + "　スピード-" + speed + "　持続力-" + durability + "\n"
                + "射程距離-" + range + "　精密動作性-" + accuracy + "　成長性-" + growth + "\n"
                + "TRPG的DEX-" + document.status.dexS.value + "\n"
                + "ダメージボーナス-" + document.status.dbS.value + "\n"
                + "防御可能量-" + document.status.deffenceS.value + "\n"
                + "\n"
                + "【スタンド詳細】\n"
                + document.status.standdetail.value + "\n"
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
    link.download = document.status.charaname.value+".txt";
    link.click();
}

function chapare6(){
    var standabilitybattle = document.getElementById("standabilitybattle");
    var standabilityaction = document.getElementById("standabilityaction");
    var battle = document.getElementById("battle");
    var search = document.getElementById("search");
    var action = document.getElementById("action");
    var negotiations = document.getElementById("negotiations");
    var knowledge = document.getElementById("knowledge");
    var etc = document.getElementById("etc");

    var pcstatusB = "";
    var pcstatusS = "";
    var pcstatusA = "";
    var pcstatusN = "";
    var pcstatusK = "";
    var pcstatusE = "";
    var standstatusB = "";
    var standstatusA = "";

    var pcstr = "";
    var standstr = "";

    var isstandstr = false;
    if(document.status.usestand.value == "true"){
        isstandstr = true;
    }else{
        isstandstr = false;
    }

    for(let table = 0; table < standabilitybattle.rows.length-1; table++){
        if(table < defstandbattlenum){
            if(standabilitybattle.rows[table+1].cells[1].innerHTML.includes("input")){
                //standstatusB += standabilitybattle.rows[table+1].cells[1].innerText
                //+ document.getElementsByName("standabilitybattlename"+table)[0].value + "- " 
                //+ document.getElementsByName("tostandabilitybattle"+table)[0].value + "\n";

                standstatusB += "CCB<=" + document.getElementsByName("tostandabilitybattle"+table)[0].value + " 【" 
                                + standabilitybattle.rows[table+1].cells[1].innerText
                                + document.getElementsByName("standabilitybattlename"+table)[0].value + "】\n";
            }else{
                //standstatusB += standabilitybattle.rows[table+1].cells[1].innerText + "- " 
                //+ document.getElementsByName("tostandabilitybattle"+table)[0].value + "\n";

                standstatusB += "CCB<=" + document.getElementsByName("tostandabilitybattle"+table)[0].value + " 【" 
                                + standabilitybattle.rows[table+1].cells[1].innerText + "】\n";
            }
            
            
        }else{
            //standstatusB += document.getElementsByName("standabilitybattlename"+table)[0].value + "- " 
            //                + document.getElementsByName("tostandabilitybattle"+table)[0].value + "\n";

            standstatusB += "CCB<=" + document.getElementsByName("tostandabilitybattle"+table)[0].value + " 【" 
            + document.getElementsByName("standabilitybattlename"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < standabilityaction.rows.length-1; table++){
        if(table < defstandactionnum){
            if(standabilityaction.rows[table+1].cells[1].innerHTML.includes("input")){
                //standstatusA += standabilityaction.rows[table+1].cells[1].innerText
                //+ document.getElementsByName("standabilityactionname"+table)[0].value + "- " 
                //+ document.getElementsByName("tostandabilityaction"+table)[0].value + "\n";

                standstatusA += "CCB<=" + document.getElementsByName("tostandabilityaction"+table)[0].value + " 【" 
                                + standabilityaction.rows[table+1].cells[1].innerText
                                + document.getElementsByName("standabilityactionname"+table)[0].value + "】\n";
            }else{
                //standstatusA += standabilityaction.rows[table+1].cells[1].innerText + "- " 
                //+ document.getElementsByName("tostandabilityaction"+table)[0].value + "\n";

                standstatusA += "CCB<=" + document.getElementsByName("tostandabilityaction"+table)[0].value + " 【" 
                                + standabilityaction.rows[table+1].cells[1].innerText + "】\n";
            }
            
            
        }else{
            //standstatusA += document.getElementsByName("standabilityactionname"+table)[0].value + "- " 
            //                + document.getElementsByName("tostandabilityaction"+table)[0].value + "\n";

            standstatusA += "CCB<=" + document.getElementsByName("tostandabilityaction"+table)[0].value + " 【" 
            + document.getElementsByName("standabilityactionname"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < battle.rows.length-1; table++){
        if(document.getElementsByName("tobattle"+table)[0].value
            == document.getElementsByName("defbattle"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcbattlenum && !isinitial){
            if(battle.rows[table+1].cells[1].innerHTML.includes("input")){
                //pcstatusB += battle.rows[table+1].cells[1].innerText
                //+ document.getElementsByName("battlename"+table)[0].value + "- " 
                //+ document.getElementsByName("tobattle"+table)[0].value + "\n";

                pcstatusB += "CCB<=" + document.getElementsByName("tobattle"+table)[0].value + " 【"
                            + battle.rows[table+1].cells[1].innerText
                            + document.getElementsByName("battlename"+table)[0].value + "】\n";
            }else{
                //pcstatusB += battle.rows[table+1].cells[1].innerText + "- " 
                //+ document.getElementsByName("tobattle"+table)[0].value + "\n";

                pcstatusB += "CCB<=" + document.getElementsByName("tobattle"+table)[0].value + " 【"
                            + battle.rows[table+1].cells[1].innerText + "】\n";
            }
        
        }else if(!isinitial){
            //pcstatusB += document.getElementsByName("battlename"+table)[0].value + "- " 
            //                + document.getElementsByName("tobattle"+table)[0].value + "\n";

            pcstatusB += "CCB<=" + document.getElementsByName("tobattle"+table)[0].value + " 【"
            + document.getElementsByName("battlename"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < search.rows.length-1; table++){
        if(document.getElementsByName("tosearch"+table)[0].value
            == document.getElementsByName("defsearch"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcsearchnum && !isinitial){
            if(search.rows[table+1].cells[1].innerHTML.includes("input")){
                //pcstatusS += search.rows[table+1].cells[1].innerText
                //+ document.getElementsByName("searchname"+table)[0].value + "- " 
                //+ document.getElementsByName("tosearch"+table)[0].value + "\n";

                pcstatusS += "CCB<=" + document.getElementsByName("tosearch"+table)[0].value + " 【"
                            + search.rows[table+1].cells[1].innerText
                            + document.getElementsByName("searchname"+table)[0].value + "】\n";
            }else{
                //pcstatusS += search.rows[table+1].cells[1].innerText + "- " 
                //+ document.getElementsByName("tosearch"+table)[0].value + "\n";

                pcstatusS += "CCB<=" + document.getElementsByName("tosearch"+table)[0].value + " 【"
                            + search.rows[table+1].cells[1].innerText + "】\n";
            }
        
        }else if(!isinitial){
            //pcstatusS += document.getElementsByName("searchname"+table)[0].value + "- " 
            //                + document.getElementsByName("tosearch"+table)[0].value + "\n";

            pcstatusS += "CCB<=" + document.getElementsByName("tosearch"+table)[0].value + " 【"
            + document.getElementsByName("searchname"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < action.rows.length-1; table++){
        if(document.getElementsByName("toaction"+table)[0].value
            == document.getElementsByName("defaction"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcactionnum && !isinitial){
            if(action.rows[table+1].cells[1].innerHTML.includes("input")){
                //pcstatusA += action.rows[table+1].cells[1].innerText
                //+ document.getElementsByName("actionname"+table)[0].value + "- " 
                //+ document.getElementsByName("toaction"+table)[0].value + "\n";

                pcstatusA += "CCB<=" + document.getElementsByName("toaction"+table)[0].value + " 【"
                            + action.rows[table+1].cells[1].innerText
                            + document.getElementsByName("actionname"+table)[0].value + "】\n";
            }else{
                //pcstatusA += action.rows[table+1].cells[1].innerText + "- " 
                //+ document.getElementsByName("toaction"+table)[0].value + "\n";

                pcstatusA += "CCB<=" + document.getElementsByName("toaction"+table)[0].value + " 【"
                            + action.rows[table+1].cells[1].innerText + "】\n";
            }
        
        }else if(!isinitial){
            //pcstatusA += document.getElementsByName("actionname"+table)[0].value + "- " 
            //                + document.getElementsByName("toaction"+table)[0].value + "\n";

            pcstatusA += "CCB<=" + document.getElementsByName("toaction"+table)[0].value + " 【"
            + document.getElementsByName("actionname"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < negotiations.rows.length-1; table++){
        if(document.getElementsByName("tonegotiations"+table)[0].value
            == document.getElementsByName("defnegotiations"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcnegotiationsnum && !isinitial){
            if(negotiations.rows[table+1].cells[1].innerHTML.includes("input")){
                //pcstatusN += negotiations.rows[table+1].cells[1].innerText
                //+ document.getElementsByName("negotiationsname"+table)[0].value + "- " 
                //+ document.getElementsByName("tonegotiations"+table)[0].value + "\n";

                pcstatusN += "CCB<=" + document.getElementsByName("tonegotiations"+table)[0].value + " 【"
                            + negotiations.rows[table+1].cells[1].innerText
                            + document.getElementsByName("negotiationsname"+table)[0].value + "】\n";
            }else{
                //pcstatusN += negotiations.rows[table+1].cells[1].innerText + "- " 
                //+ document.getElementsByName("tonegotiations"+table)[0].value + "\n";

                pcstatusN += "CCB<=" + document.getElementsByName("tonegotiations"+table)[0].value + " 【"
                            + negotiations.rows[table+1].cells[1].innerText + "】\n";
            }
        
        }else if(!isinitial){
            //pcstatusN += document.getElementsByName("negotiationsname"+table)[0].value + "- " 
            //                + document.getElementsByName("tonegotiations"+table)[0].value + "\n";

            pcstatusN += "CCB<=" + document.getElementsByName("tonegotiations"+table)[0].value + " 【"
            + document.getElementsByName("negotiationsname"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < knowledge.rows.length-1; table++){
        if(document.getElementsByName("toknowledge"+table)[0].value
            == document.getElementsByName("defknowledge"+table)[0].value) isinitial = true;
            else isinitial = false;
        if(table < defpcknowledgenum && !isinitial){
            if(knowledge.rows[table+1].cells[1].innerHTML.includes("input")){
                //pcstatusK += knowledge.rows[table+1].cells[1].innerText
                //+ document.getElementsByName("knowledgename"+table)[0].value + "- " 
                //+ document.getElementsByName("toknowledge"+table)[0].value + "\n";

                pcstatusK += "CCB<=" + document.getElementsByName("toknowledge"+table)[0].value + " 【"
                            + knowledge.rows[table+1].cells[1].innerText
                            + document.getElementsByName("knowledgename"+table)[0].value + "】\n";
            }else{
                //pcstatusK += knowledge.rows[table+1].cells[1].innerText + "- " 
                //+ document.getElementsByName("toknowledge"+table)[0].value + "\n";

                pcstatusK += "CCB<=" + document.getElementsByName("toknowledge"+table)[0].value + " 【"
                            + knowledge.rows[table+1].cells[1].innerText + "】\n";
            }
        
        }else if(!isinitial){
            //pcstatusK += document.getElementsByName("knowledgename"+table)[0].value + "- " 
            //                + document.getElementsByName("toknowledge"+table)[0].value + "\n";

            pcstatusK += "CCB<=" + document.getElementsByName("toknowledge"+table)[0].value + " 【"
            + document.getElementsByName("knowledgename"+table)[0].value + "】\n";
        }
    }
    for(let table = 0; table < etc.rows.length-1; table++){
        if(document.getElementsByName("toetc"+table)[0].value
            == document.getElementsByName("defetc"+table)[0].value) isinitial = true;
            else isinitial = false;
        //pcstatusE += document.getElementsByName("etcname"+table)[0].value + "- " 
        //                + document.getElementsByName("toetc"+table)[0].value + "\n";
        if(!isinitial){
            pcstatusE += "CCB<=" + document.getElementsByName("toetc"+table)[0].value + " 【"
            + document.getElementsByName("etcname"+table)[0].value + "】\n";
        }
    }

    var statusdice = "";

    statusdice += "CCB<={SAN} 【SANC】\n"
                + "CCB<={アイデア} 【アイデア】\n"
                + "CCB<={幸運} 【幸運】\n"
                + "CCB<={知識} 【知識】\n"

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
    
    let ary = pcstr.split('');
    let blob = new Blob(ary,{type:"text/plan"});
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    //link.download = "test.txt";
    link.download = document.status.charaname.value + "のチャパレ.txt";
    link.click();
}

function calc7(){
    var str = Number(document.status.str0.value) + Number(document.status.str1.value);
    var con = Number(document.status.con0.value) + Number(document.status.con1.value);
    var pow = Number(document.status.pow0.value) + Number(document.status.pow1.value);
    var dex = Number(document.status.dex0.value) + Number(document.status.dex1.value);
    var app = Number(document.status.app0.value) + Number(document.status.app1.value);
    var siz = Number(document.status.siz0.value) + Number(document.status.siz1.value);
    var int = Number(document.status.int0.value) + Number(document.status.int1.value);
    var edu = Number(document.status.edu0.value) + Number(document.status.edu1.value);
    document.status.str2.value = str;
    document.status.con2.value = con;
    document.status.pow2.value = pow;
    document.status.dex2.value = dex;
    document.status.app2.value = app;
    document.status.siz2.value = siz;
    document.status.int2.value = int;
    document.status.edu2.value = edu;

    var defstr = Number(document.status.str0.value);
    var defcon = Number(document.status.con0.value);
    var defpow = Number(document.status.pow0.value);
    var defdex = Number(document.status.dex0.value);
    var defapp = Number(document.status.app0.value);
    var defsiz = Number(document.status.siz0.value);
    var defint = Number(document.status.int0.value);
    var defedu = Number(document.status.edu0.value);

    var defhp = Math.ceil((defcon+defsiz)/2);
    var defmp = defpow;
    var defsan = defpow*5;
    var defidea = defint*5;
    var defluck = defpow*5;
    var defknow = defedu*5;
    document.status.hp0.value = defhp;
    document.status.mp0.value = defmp;
    document.status.san0.value = defsan;
    document.status.idea0.value = defidea;
    document.status.luck0.value = defluck;
    document.status.know0.value = defknow;

    var hp = defhp + Number(document.status.hp1.value);
    var mp = defmp + Number(document.status.mp1.value);
    var san = defsan + Number(document.status.san1.value);
    var idea = defidea + Number(document.status.idea1.value);
    var luck = defluck + Number(document.status.luck1.value);
    var know = defknow + Number(document.status.know1.value);
    document.status.hp2.value = hp;
    document.status.mp2.value = mp;
    document.status.san2.value = san;
    document.status.idea2.value = idea;
    document.status.luck2.value = luck;
    document.status.know2.value = know;

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
    document.status.db.value = db;
}

function randomStatus7(){
    var str = Math.floor(Math.random() * (18 - 3) + 3);
    var con = Math.floor(Math.random() * (18 - 3) + 3);
    var pow = Math.floor(Math.random() * (18 - 3) + 3);
    var dex = Math.floor(Math.random() * (18 - 3) + 3);
    var app = Math.floor(Math.random() * (18 - 3) + 3);
    var siz = Math.floor(Math.random() * (12 - 2) + 2 + 6);
    var int = Math.floor(Math.random() * (12 - 2) + 2 + 6);
    var edu = Math.floor(Math.random() * (18 - 3) + 3 + 3);
    document.status.str0.value = str;
    document.status.con0.value = con;
    document.status.pow0.value = pow;
    document.status.dex0.value = dex;
    document.status.app0.value = app;
    document.status.siz0.value = siz;
    document.status.int0.value = int;
    document.status.edu0.value = edu;
    calc7();
}
