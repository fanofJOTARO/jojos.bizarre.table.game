let defpcbattlenum6 = 0;
let defpcsearchnum6 = 0;
let defpcactionnum6 = 0;
let defpcnegotiationsnum6 = 0;
let defpcknowledgenum6 = 0;
let defpcetcnum6 = 0;
let defpcitemsnum6 = 0;
let defstandbattlenum6 = 0;
let defstandactionnum6 = 0;

let defpcbattlenum7 = 0;
let defpcsearchnum7 = 0;
let defpcactionnum7 = 0;
let defpcnegotiationsnum7 = 0;
let defpcknowledgenum7 = 0;
let defpcetcnum7 = 0;
let defpcitemsnum7 = 0;
let defstandbattlenum7 = 0;
let defstandactionnum7 = 0;

function create6(){
    var num = 6;
    adddefpc(num, "battle", "波紋", "0");
    adddefpc(num, "battle", "こぶし", "50");
    adddefpc(num, "battle", "回避", "0");
    adddefpc(num, "battle", "キック", "25");
    adddefpc(num, "battle", "頭突き", "10");
    adddefpc(num, "battle", "組みつき", "25");
    adddefpc(num, "battle", "投擲", "25");
    adddefpc(num, "battle", "マーシャルアーツ", "1");
    adddefpc(num, "battle", "拳銃", "20");
    adddefpc(num, "battle", "サブマシンガン", "15");
    adddefpc(num, "battle", "ショットガン", "30");
    adddefpc(num, "battle", "マシンガン", "15");
    adddefpc(num, "battle", "ライフル", "25");

    adddefpc(num, "search", "応急処置", "30", false);
    adddefpc(num, "search", "鍵開け", "1", false);
    adddefpc(num, "search", "隠す", "15", false);
    adddefpc(num, "search", "隠れる", "10", false);
    adddefpc(num, "search", "聞き耳", "25", false);
    adddefpc(num, "search", "忍び歩き", "10", false);
    adddefpc(num, "search", "写真術", "10", false);
    adddefpc(num, "search", "精神分析", "1", false);
    adddefpc(num, "search", "追跡", "10", false);
    adddefpc(num, "search", "登攀", "40", false);
    adddefpc(num, "search", "図書館", "25", false);
    adddefpc(num, "search", "目星", "25", false);

    adddefpc(num, "action", "運転", "20", true);
    adddefpc(num, "action", "修理", "20", false);
    adddefpc(num, "action", "重機械操作", "1", false);
    adddefpc(num, "action", "乗馬", "5", false);
    adddefpc(num, "action", "水泳", "25", false);
    adddefpc(num, "action", "製作", "5", true);
    adddefpc(num, "action", "電気修理", "10", false);
    adddefpc(num, "action", "機械操作", "1", true);
    adddefpc(num, "action", "跳躍", "25", false);
    adddefpc(num, "action", "ナビゲート", "10", false);
    adddefpc(num, "action", "変装", "1", false);

    adddefpc(num, "negotiations", "言いくるめ", "5", false);
    adddefpc(num, "negotiations", "信用", "15", false);
    adddefpc(num, "negotiations", "説得", "15", false);
    adddefpc(num, "negotiations", "値切り交渉", "5", false);
    adddefpc(num, "negotiations", "母国語", "20", true);

    adddefpc(num, "knowledge", "医学", "5", false);
    adddefpc(num, "knowledge", "オカルト", "5", false);
    adddefpc(num, "knowledge", "化学", "5", false);
    adddefpc(num, "knowledge", "クトゥルフ神話知識", "0", false);
    adddefpc(num, "knowledge", "芸術", "5", true, "arts");
    adddefpc(num, "knowledge", "経理", "10", false);
    adddefpc(num, "knowledge", "考古学", "1", false);
    adddefpc(num, "knowledge", "コンピューター", "1", false);
    adddefpc(num, "knowledge", "心理学", "5", false);
    adddefpc(num, "knowledge", "人類学", "1", false);
    adddefpc(num, "knowledge", "生物学", "1", false);
    adddefpc(num, "knowledge", "地質学", "1", false);
    adddefpc(num, "knowledge", "電子工学", "1", false);
    adddefpc(num, "knowledge", "天文学", "1", false);
    adddefpc(num, "knowledge", "博物学", "10", false);
    adddefpc(num, "knowledge", "物理学", "1", false);
    adddefpc(num, "knowledge", "海洋学", "1", false);
    adddefpc(num, "knowledge", "言語学", "1", false);
    adddefpc(num, "knowledge", "法律", "5", false);
    adddefpc(num, "knowledge", "薬学", "1", false);
    adddefpc(num, "knowledge", "歴史", "20", false);

    adddefstand(num, "battle", "こぶしS", "50", false);
    adddefstand(num, "battle", "キックS", "25", false);
    adddefstand(num, "battle", "回避S", "0", false);
    adddefstand(num, "battle", "組みつきS", "25", false);
    adddefstand(num, "battle", "投擲S", "50", false);
    
    adddefstand(num, "action", "スタンド能力", "0", false);
    adddefstand(num, "action", "目星S", "25", false);
    adddefstand(num, "action", "聞き耳S", "25", false);
    adddefstand(num, "action", "登攀S", "50", false);
    adddefstand(num, "action", "水泳S", "25", false);

    if(document.status6.usestand.value == "true"){
        document.status6.defbattle66.value = 50;
        document.status6.defsearch69.value = 50;
        document.status6.defaction68.value = 50;
    }else{
        document.status6.defbattle66.value = 25;
        document.status6.defsearch69.value = 40;
        document.status6.defaction68.value = 25;
    }
    
    reset(num);
}

function create7(){
    var num = 7;
    adddefpc(num, "battle", "波紋", "0", false);
    adddefpc(num, "battle", "回避", "0", false);
    adddefpc(num, "battle", "近接戦闘", "0", true);
    adddefpc(num, "battle", "投擲", "20", false);
    adddefpc(num, "battle", "射撃", "0", true);

    adddefpc(num, "search", "応急手当", "30", false);
    adddefpc(num, "search", "鍵開け", "1", false);
    adddefpc(num, "search", "手さばき", "10", false);
    adddefpc(num, "search", "聞き耳", "20", false);
    adddefpc(num, "search", "隠密", "20", false);
    adddefpc(num, "search", "精神分析", "1", false);
    adddefpc(num, "search", "追跡", "10", false);
    adddefpc(num, "search", "登攀", "20", false);
    adddefpc(num, "search", "図書館", "20", false);
    adddefpc(num, "search", "目星", "25", false);
    adddefpc(num, "search", "鑑定", "5", false);

    adddefpc(num, "action", "運転", "20", true);
    adddefpc(num, "action", "機械修理", "10", false);
    adddefpc(num, "action", "重機械操作", "1", false);
    adddefpc(num, "action", "乗馬", "5", false);
    adddefpc(num, "action", "水泳", "20", false);
    adddefpc(num, "action", "製作", "5", true);
    adddefpc(num, "action", "操縦", "1", true);
    adddefpc(num, "action", "跳躍", "20", false);
    adddefpc(num, "action", "電気修理", "10", false);
    adddefpc(num, "action", "ナビゲート", "10", false);
    adddefpc(num, "action", "変装", "5", false);

    adddefpc(num, "negotiations", "言いくるめ", "5", false);
    adddefpc(num, "negotiations", "信用", "0", false);
    adddefpc(num, "negotiations", "説得", "10", false);
    adddefpc(num, "negotiations", "母国語", "0", true);
    adddefpc(num, "negotiations", "威圧", "15", false);
    adddefpc(num, "negotiations", "魅惑", "15", false);
    adddefpc(num, "negotiations", "他の言語", "1", true);

    adddefpc(num, "knowledge", "医学", "1", false);
    adddefpc(num, "knowledge", "オカルト", "5", false);
    adddefpc(num, "knowledge", "クトゥルフ神話", "0", false);
    adddefpc(num, "knowledge", "芸術", "5", true);
    adddefpc(num, "knowledge", "経理", "5", false);
    adddefpc(num, "knowledge", "考古学", "1", false);
    adddefpc(num, "knowledge", "コンピューター", "5", false);
    adddefpc(num, "knowledge", "科学", "1", true);
    adddefpc(num, "knowledge", "心理学", "10", false);
    adddefpc(num, "knowledge", "人類学", "1", false);
    adddefpc(num, "knowledge", "電子工学", "1", false);
    adddefpc(num, "knowledge", "海洋学", "1", false);
    adddefpc(num, "knowledge", "自然", "10", false);
    adddefpc(num, "knowledge", "法律", "5", false);
    adddefpc(num, "knowledge", "歴史", "5", false);
    adddefpc(num, "knowledge", "サバイバル", "10", true);

    adddefstand(num, "battle", "近接戦闘S", "0", true);
    adddefstand(num, "battle", "回避S", "0", false);
    adddefstand(num, "battle", "投擲S", "50", false);

    adddefstand(num, "action", "スタンド能力", "0", false);
    adddefstand(num, "action", "目星S", "25", false);
    adddefstand(num, "action", "聞き耳S", "20", false);
    adddefstand(num, "action", "登攀S", "50", false);
    adddefstand(num, "action", "水泳S", "25", false);

    if(document.status7.usestand.value == "true"){
        document.status7.defbattle73.value = 50;
        document.status7.defsearch77.value = 50;
        document.status7.defaction77.value = 50;
    }else{
        document.status7.defbattle73.value = 20;
        document.status7.defsearch77.value = 20;
        document.status7.defaction77.value = 20;
    }
    reset(7);
}

function reset(numb){
    var standabilitybattle = document.getElementById("standabilitybattle"+numb);
    var standabilityaction = document.getElementById("standabilityaction"+numb);
    var battle = document.getElementById("battle"+numb);
    var search = document.getElementById("search"+numb);
    var action = document.getElementById("action"+numb);
    var negotiations = document.getElementById("negotiations"+numb);
    var knowledge = document.getElementById("knowledge"+numb);
    
    for(let table = 0; table < standabilitybattle.rows.length-1; table++){
        var def = Number(document.getElementsByName("defstandabilitybattle"+numb+table)[0].value);
        var cor = Number(document.getElementsByName("corstandabilitybattle"+numb+table)[0].value);
        var pl = 0;
        var add = 0;

        var sum = def+cor+pl+add;
        document.getElementsByName("plstandabilitybattle"+numb+table)[0].value = pl;
        document.getElementsByName("addstandabilitybattle"+numb+table)[0].value = add;
        document.getElementsByName("tostandabilitybattle"+numb+table)[0].value = sum;
    }
    
    for(let table = 0; table < standabilityaction.rows.length-1; table++){
        var def = Number(document.getElementsByName("defstandabilityaction"+numb+table)[0].value);
        var cor = Number(document.getElementsByName("corstandabilityaction"+numb+table)[0].value);
        var pl = 0;
        var add = 0;
        
        var sum = def+cor+pl+add;

        document.getElementsByName("plstandabilityaction"+numb+table)[0].value = 0;
        document.getElementsByName("addstandabilityaction"+numb+table)[0].value = 0;
        document.getElementsByName("tostandabilityaction"+numb+table)[0].value = sum;
    }

    for(let table = 0; table < battle.rows.length-1; table++){
        var def = Number(document.getElementsByName("defbattle"+numb+table)[0].value);

        var sum = def;

        document.getElementsByName("bpbattle"+numb+table)[0].value = 0;
        document.getElementsByName("ipbattle"+numb+table)[0].value = 0;
        document.getElementsByName("plbattle"+numb+table)[0].value = 0;
        document.getElementsByName("addbattle"+numb+table)[0].value = 0;
        document.getElementsByName("tobattle"+numb+table)[0].value = sum;
    }

    for(let table = 0; table < search.rows.length-1; table++){
        var def = Number(document.getElementsByName("defsearch"+numb+table)[0].value);

        var sum = def;

        document.getElementsByName("bpsearch"+numb+table)[0].value = 0;
        document.getElementsByName("ipsearch"+numb+table)[0].value = 0;
        document.getElementsByName("plsearch"+numb+table)[0].value = 0;
        document.getElementsByName("addsearch"+numb+table)[0].value = 0;
        document.getElementsByName("tosearch"+numb+table)[0].value = sum;
    }

    for(let table = 0; table < action.rows.length-1; table++){
        var def = Number(document.getElementsByName("defaction"+numb+table)[0].value);

        var sum = def;

        document.getElementsByName("bpaction"+numb+table)[0].value = 0;
        document.getElementsByName("ipaction"+numb+table)[0].value = 0;
        document.getElementsByName("plaction"+numb+table)[0].value = 0;
        document.getElementsByName("addaction"+numb+table)[0].value = 0;
        document.getElementsByName("toaction"+numb+table)[0].value = sum;
    }

    for(let table = 0; table < negotiations.rows.length-1; table++){
        var def = Number(document.getElementsByName("defnegotiations"+numb+table)[0].value);

        var sum = def;

        document.getElementsByName("bpnegotiations"+numb+table)[0].value = 0;
        document.getElementsByName("ipnegotiations"+numb+table)[0].value = 0;
        document.getElementsByName("plnegotiations"+numb+table)[0].value = 0;
        document.getElementsByName("addnegotiations"+numb+table)[0].value = 0;
        document.getElementsByName("tonegotiations"+numb+table)[0].value = sum;
    }

    for(let table = 0; table < knowledge.rows.length-1; table++){
        var def = Number(document.getElementsByName("defknowledge"+numb+table)[0].value);

        var sum = def;

        document.getElementsByName("bpknowledge"+numb+table)[0].value = 0;
        document.getElementsByName("ipknowledge"+numb+table)[0].value = 0;
        document.getElementsByName("plknowledge"+numb+table)[0].value = 0;
        document.getElementsByName("addknowledge"+numb+table)[0].value = 0;
        document.getElementsByName("toknowledge"+numb+table)[0].value = sum;
    }

    document.getElementsByName("defbattle"+numb+"0")[0].readOnly = "";
    if(numb == 7){
        document.getElementsByName("defbattle"+numb+"2")[0].readOnly = "";
        document.getElementsByName("defbattle"+numb+"4")[0].readOnly = "";
        document.getElementsByName("defstandabilitybattle"+numb+"0")[0].readOnly = "";
        calc7();
    }else if(numb == 6){
        calc6();
    }
}

function adddefstand(numb, name, names, defval, intext){
    let tr = document.createElement("tr");
    if(numb == 6){
        if(name == "battle"){
            defstandbattlenum6++;
        }else if(name == "action"){
            defstandactionnum6++;
        }
    }else if(numb == 7){
        if(name == "battle"){
            defstandbattlenum7++;
        }else if(name == "action"){
            defstandactionnum7++;
        }
    }
    
    var row = document.getElementById("standability"+name+numb).rows.length - 1;
    const td = [];
    for(let i = 0; i < 7; i++){
        td.push(document.createElement("td"));
    }

    let ch = document.createElement("input");
    ch.type = "checkbox";
    ch.name = "chstandability"+name+numb+row;
    td[0].appendChild(ch);

    if(intext){
        let namess = document.createTextNode(names);
        let inp = document.createElement("input");
        inp.type = "text";
        inp.size = "10";
        inp.name = "standability"+name+"name"+numb+row;
        inp.className = "intext";
        inp.value = "()";
        td[1].appendChild(namess);
        td[1].appendChild(inp);
    }else{
        let namess = document.createTextNode(names);
        namess.name = "standability"+name+"name"+numb+row;
        td[1].appendChild(namess);
    }
    

    let def = document.createElement("input");
    def.type = "text";
    def.name = "defstandability"+name+numb+row;
    def.size = "2";
    def.readOnly = "readonly";
    def.value = defval;
    td[2].appendChild(def);

    let cor = document.createElement("input");
    cor.type = "text";
    cor.name = "corstandability"+name+numb+row;
    cor.className = "corstand"+name+numb;
    cor.size = "2";
    cor.readOnly = "readonly";
    cor.value = "0";
    td[3].appendChild(cor);

    let pl = document.createElement("input");
    pl.type = "text";
    pl.name = "plstandability"+name+numb+row;
    pl.size = "2";
    pl.addEventListener("change", (event) => {calcstatus6()});
    td[4].appendChild(pl);

    let add = document.createElement("input");
    add.type = "text";
    add.name = "addstandability"+name+numb+row;
    add.size = "2";
    add.addEventListener("change", (event) => {calcstatus6()});
    td[5].appendChild(add);

    let to = document.createElement("input");
    to.type = "text";
    to.name = "tostandability"+name+numb+row;
    to.size = "2";
    to.value = defval;
    to.readOnly = "readonly";
    td[6].appendChild(to);

    for(let i = 0; i < 7; i++){
        tr.appendChild(td[i]);
    }
    document.getElementById("standability"+name+numb).appendChild(tr);
}

function adddefpc(numb, name, names, defval, intext){
    let tr = document.createElement("tr");
    var row = document.getElementById(name + numb).rows.length - 1;
    const td = [];
    for(let i = 0; i < 8; i++){
        td.push(document.createElement("td"));
    }
    if(numb == 6){
        if(name == "battle"){
            defpcbattlenum6++;
        }else if(name == "search"){
            defpcsearchnum6++;
        }else if(name == "action"){
            defpcactionnum6++;
        }else if(name == "negotiations"){
            defpcnegotiationsnum6++;
        }else if(name == "knowledge"){
            defpcknowledgenum6++;
        }
    }else if(numb == 7){
        if(name == "battle"){
            defpcbattlenum7++;
        }else if(name == "search"){
            defpcsearchnum7++;
        }else if(name == "action"){
            defpcactionnum7++;
        }else if(name == "negotiations"){
            defpcnegotiationsnum7++;
        }else if(name == "knowledge"){
            defpcknowledgenum7++;
        }
    }
    
    let ch = document.createElement("input");
    ch.type = "checkbox";
    ch.name = "ch"+name+numb+row;
    td[0].appendChild(ch);

    if(intext){
        let namess = document.createTextNode(names);
        let inp = document.createElement("input");
        inp.type = "text";
        inp.size = "10";
        inp.name = name + "name"+numb+row;
        inp.className = "intext";
        inp.value = "()";
        td[1].appendChild(namess);
        td[1].appendChild(inp);
    }else{
        let namess = document.createTextNode(names);
        namess.name = name + "name"+numb+row;
        td[1].appendChild(namess);
    }
    

    let def = document.createElement("input");
    def.type = "text";
    def.name = "def" + name + numb +row;
    def.size = "2";
    def.readOnly = "readonly";
    def.value = defval;
    td[2].appendChild(def);

    let bp = document.createElement("input");
    bp.type = "text";
    bp.name = "bp" + name + numb+row;
    bp.size = "2";
    bp.addEventListener("change", (event) => {calcstatus6()});
    td[3].appendChild(bp);
    
    let ip = document.createElement("input");
    ip.type = "text";
    ip.name = "ip" + name + numb+row;
    ip.size = "2";
    ip.addEventListener("change", (event) => {calcstatus6()});
    td[4].appendChild(ip);

    let pl = document.createElement("input");
    pl.type = "text";
    pl.name = "pl" + name + numb+row;
    pl.size = "2";
    pl.addEventListener("change", (event) => {calcstatus6()});
    td[5].appendChild(pl);

    let add = document.createElement("input");
    add.type = "text";
    add.name = "add" + name + numb+row;
    add.size = "2";
    add.addEventListener("change", (event) => {calcstatus6()});
    td[6].appendChild(add);

    let to = document.createElement("input");
    to.type = "text";
    to.name = "to" + name + numb+row;
    to.size = "2";
    to.value = defval;
    to.readOnly = "readonly";
    td[7].appendChild(to);

    for(let i = 0; i < 8; i++){
        tr.appendChild(td[i]);
    }
    document.getElementById(name + numb).appendChild(tr);
}

function additem(numb){
    let tr = document.createElement("tr");
    var row = document.getElementById("items"+numb).rows.length - 1;
    const td = [];
    for(let i = 0; i < 3; i++){
        td.push(document.createElement("td"));
    }

    let name = document.createElement("input");
    name.type = "text";
    name.name = "itemsname"+numb+row;
    td[0].appendChild(name);

    let num = document.createElement("input");
    num.type = "text";
    num.name = "itemsnum"+numb+row;
    num.size = "2";
    td[1].appendChild(num);

    let detail = document.createElement("input");
    detail.type = "text";
    detail.name = "itemsdetail"+numb+row;
    detail.size = "30";
    td[2].appendChild(detail);

    for(let i = 0; i < 3; i++){
        tr.appendChild(td[i]);
    }
    document.getElementById("items"+numb).appendChild(tr);
    if(numb == 6) calc6();
}

function addstand(numb, name){
    let tr = document.createElement("tr");
    var row = document.getElementById("standability"+name+numb).rows.length - 1;
    const td = [];
    for(let i = 0; i < 7; i++){
        td.push(document.createElement("td"));
    }

    let ch = document.createElement("input");
    ch.type = "checkbox";
    ch.name = "chstandability"+name+numb+row;
    td[0].appendChild(ch);

    let names = document.createElement("input");
    names.type = "text";
    names.name = "standability"+name+"name"+numb+row;
    names.size = "16";
    td[1].appendChild(names);

    let def = document.createElement("input");
    def.type = "text";
    def.name = "defstandability"+name+numb+row;
    def.size = "2";
    def.value = 0;
    def.addEventListener("change", (event) => {calcstatus6()});
    td[2].appendChild(def);

    let cor = document.createElement("input");
    cor.type = "text";
    cor.name = "corstandability"+name+numb+row;
    cor.className = "corstand"+name+numb;
    cor.size = "2";
    cor.readOnly = "readonly";
    td[3].appendChild(cor);

    let pl = document.createElement("input");
    pl.type = "text";
    pl.name = "plstandability"+name+numb+row;
    pl.size = "2";
    pl.value = 0;
    pl.addEventListener("change", (event) => {calcstatus6()});
    td[4].appendChild(pl);

    let add = document.createElement("input");
    add.type = "text";
    add.name = "addstandability"+name+numb+row;
    add.size = "2";
    add.value = 0;
    add.addEventListener("change", (event) => {calcstatus6()});
    td[5].appendChild(add);

    let to = document.createElement("input");
    to.type = "text";
    to.name = "tostandability"+name+numb+row;
    to.size = "2";
    to.readOnly = "readonly";
    td[6].appendChild(to);

    for(let i = 0; i < 7; i++){
        tr.appendChild(td[i]);
    }
    document.getElementById("standability"+name+numb).appendChild(tr);
    if(numb == 6) calc6();
}

function addpc(numb, name){
    let tr = document.createElement("tr");
    var row = document.getElementById(name + numb).rows.length - 1;
    const td = [];
    for(let i = 0; i < 8; i++){
        td.push(document.createElement("td"));
    }

    let ch = document.createElement("input");
    ch.type = "checkbox";
    ch.name = "ch"+name+numb+row;
    td[0].appendChild(ch);

    let names = document.createElement("input");
    names.type = "text";
    names.name = name + "name"+numb+row;
    names.size = "16";
    td[1].appendChild(names);

    let def = document.createElement("input");
    def.type = "text";
    def.name = "def"+name+numb+row;
    def.size = "2";
    def.value = 0;
    def.addEventListener("change", (event) => {calcstatus6()});
    td[2].appendChild(def);

    let bp = document.createElement("input");
    bp.type = "text";
    bp.name = "bp"+name+numb+row;
    bp.size = "2";
    bp.value = 0;
    bp.addEventListener("change", (event) => {calcstatus6()});
    td[3].appendChild(bp);
    
    let ip = document.createElement("input");
    ip.type = "text";
    ip.name = "ip"+name+numb+row;
    ip.size = "2";
    ip.value = 0;
    ip.addEventListener("change", (event) => {calcstatus6()});
    td[4].appendChild(ip);

    let pl = document.createElement("input");
    pl.type = "text";
    pl.name = "pl"+name+numb+row;
    pl.size = "2";
    pl.value = 0;
    pl.addEventListener("change", (event) => {calcstatus6()});
    td[5].appendChild(pl);

    let add = document.createElement("input");
    add.type = "text";
    add.name = "add"+name+numb+row;
    add.size = "2";
    add.value = 0;
    add.addEventListener("change", (event) => {calcstatus6()});
    td[6].appendChild(add);

    let to = document.createElement("input");
    to.type = "text";
    to.name = "to"+name+numb+row;
    to.size = "2";
    to.value = 0;
    to.readOnly = "readonly";
    td[7].appendChild(to);

    for(let i = 0; i < 8; i++){
        tr.appendChild(td[i]);
    }
    document.getElementById(name+numb).appendChild(tr);
    if(numb == 6) calc6();
}

function del(numb, name){
    var rowscount = 1;
    if(numb == 6){
        if(name == "battle"){
            rowscount = defpcbattlenum6+1;
        }else if(name == "search"){
            rowscount = defpcsearchnum6+1;
        }else if(name == "action"){
            rowscount = defpcactionnum6+1;
        }else if(name == "negotiations"){
            rowscount = defpcnegotiationsnum6+1;
        }else if(name == "knowledge"){
            rowscount = defpcknowledgenum6+1;
        }else if(name == "etc"){
            rowscount = defpcetcnum6+1;
        }else if(name == "standabilitybattle"){
            rowscount = defstandbattlenum6+1;
        }else if(name == "standabilityaction"){
            rowscount = defstandactionnum6+1;
        }else if(name == "items"){
            rowscount = defpcitemsnum6+1;
        }
    }else if(numb == 7){
        if(name == "battle"){
            rowscount = defpcbattlenum7+1;
        }else if(name == "search"){
            rowscount = defpcsearchnum7+1;
        }else if(name == "action"){
            rowscount = defpcactionnum7+1;
        }else if(name == "negotiations"){
            rowscount = defpcnegotiationsnum7+1;
        }else if(name == "knowledge"){
            rowscount = defpcknowledgenum7+1;
        }else if(name == "etc"){
            rowscount = defpcetcnum7+1;
        }else if(name == "standabilitybattle"){
            rowscount = defstandbattlenum7+1;
        }else if(name == "standabilityaction"){
            rowscount = defstandactionnum7+1;
        }else if(name == "items"){
            rowscount = defpcitemsnum7+1;
        }
    }
    
    if(document.getElementById(name+numb).rows.length > rowscount){
        document.getElementById(name+numb).deleteRow(document.getElementById(name+numb).rows.length - 1);
    }
    
}

function addpcload(numb, name, data){
    let tr = document.createElement("tr");
    var row = document.getElementById(name + numb).rows.length - 1;
    const td = [];
    for(let i = 0; i < 8; i++){
        td.push(document.createElement("td"));
    }

    let ch = document.createElement("input");
    ch.type = "checkbox";
    ch.name = "ch"+name+numb+row;
    ch.checked = data.isgrowth;
    td[0].appendChild(ch);

    let namess = document.createElement("input");
    namess.type = "text";
    namess.name = name + "name"+numb+row;
    namess.size = "16";
    namess.value = data.name;
    td[1].appendChild(namess);

    let def = document.createElement("input");
    def.type = "text";
    def.name = "def"+name+numb+row;
    def.size = "2";
    def.value = data.num[0];
    def.addEventListener("change", (event) => {calcstatus6()});
    td[2].appendChild(def);

    let bp = document.createElement("input");
    bp.type = "text";
    bp.name = "bp"+name+numb+row;
    bp.size = "2";
    bp.value = data.num[1];
    bp.addEventListener("change", (event) => {calcstatus6()});
    td[3].appendChild(bp);
    
    let ip = document.createElement("input");
    ip.type = "text";
    ip.name = "ip"+name+numb+row;
    ip.size = "2";
    ip.value = data.num[2];
    ip.addEventListener("change", (event) => {calcstatus6()});
    td[4].appendChild(ip);

    let pl = document.createElement("input");
    pl.type = "text";
    pl.name = "pl"+name+numb+row;
    pl.size = "2";
    pl.value = data.num[3];
    pl.addEventListener("change", (event) => {calcstatus6()});
    td[5].appendChild(pl);

    let add = document.createElement("input");
    add.type = "text";
    add.name = "add"+name+numb+row;
    add.size = "2";
    add.value = data.num[4];
    add.addEventListener("change", (event) => {calcstatus6()});
    td[6].appendChild(add);

    let to = document.createElement("input");
    to.type = "text";
    to.name = "to"+name+numb+row;
    to.size = "2";
    to.value = data.num[5];
    to.readOnly = "readonly";
    td[7].appendChild(to);

    for(let i = 0; i < 8; i++){
        tr.appendChild(td[i]);
    }
    document.getElementById(name + numb).appendChild(tr);
}

function loadaddpc(numb, name, data){
    let status = data;
    let tag = name;
    let defrow = 0;

    if(numb == 6){
        if(tag == "battle"){
            defrow = defpcbattlenum6;
        }else if(tag == "search"){
            defrow = defpcsearchnum6;
        }else if(tag == "action"){
            defrow = defpcactionnum6;
        }else if(tag == "negotiations"){
            defrow = defpcnegotiationsnum6;
        }else if(tag == "knowledge"){
            defrow = defpcknowledgenum6;
        }
    }else if(numb == 7){
        if(tag == "battle"){
            defrow = defpcbattlenum7;
        }else if(tag == "search"){
            defrow = defpcsearchnum7;
        }else if(tag == "action"){
            defrow = defpcactionnum7;
        }else if(tag == "negotiations"){
            defrow = defpcnegotiationsnum7;
        }else if(tag == "knowledge"){
            defrow = defpcknowledgenum7;
        }
    }

    for(let table = 0; table < status.length; table++){
        if(table < defrow){
            document.getElementsByName("ch"+tag+numb+table)[0].checked = status[table].growth;
            if(status[table].isinput) document.getElementsByName(tag+"name"+numb+table)[0].value = status[table].inputname;
            document.getElementsByName("def"+tag+numb+table)[0].value = status[table].num[0];
            document.getElementsByName("bp"+tag+numb+table)[0].value = status[table].num[1];
            document.getElementsByName("ip"+tag+numb+table)[0].value = status[table].num[2];
            document.getElementsByName("pl"+tag+numb+table)[0].value = status[table].num[3];
            document.getElementsByName("add"+tag+numb+table)[0].value = status[table].num[4];
            document.getElementsByName("to"+tag+numb+table)[0].value = status[table].num[5];
        }else{
            addpcload(numb, tag, status[table]);
        }
    }
    
    
}

function addstandload(numb, name, data){
    let tr = document.createElement("tr");
    var row = document.getElementById(name + numb).rows.length - 1;
    const td = [];
    for(let i = 0; i < 7; i++){
        td.push(document.createElement("td"));
    }

    let ch = document.createElement("input");
    ch.type = "checkbox";
    ch.name = "ch"+name+numb+row;
    ch.checked = data.isgrowth;
    td[0].appendChild(ch);

    let namess = document.createElement("input");
    namess.type = "text";
    namess.name = name + "name"+numb+row;
    namess.size = "16";
    namess.value = data.name;
    td[1].appendChild(namess);

    let def = document.createElement("input");
    def.type = "text";
    def.name = "def"+name+numb+row;
    def.size = "2";
    def.value = data.num[0];
    def.addEventListener("change", (event) => {calcstatus6()});
    td[2].appendChild(def);

    let cor = document.createElement("input");
    cor.type = "text";
    cor.name = "cor"+name+numb+row;
    cor.size = "2";
    cor.value = data.num[1];
    cor.addEventListener("change", (event) => {calcstatus6()});
    td[3].appendChild(cor);

    let pl = document.createElement("input");
    pl.type = "text";
    pl.name = "pl"+name+numb+row;
    pl.size = "2";
    pl.value = data.num[2];
    pl.addEventListener("change", (event) => {calcstatus6()});
    td[4].appendChild(pl);

    let add = document.createElement("input");
    add.type = "text";
    add.name = "add"+name+numb+row;
    add.size = "2";
    add.value = data.num[3];
    add.addEventListener("change", (event) => {calcstatus6()});
    td[5].appendChild(add);

    let to = document.createElement("input");
    to.type = "text";
    to.name = "to"+name+numb+row;
    to.size = "2";
    to.value = data.num[4];
    to.readOnly = "readonly";
    td[6].appendChild(to);

    for(let i = 0; i < 7; i++){
        tr.appendChild(td[i]);
    }
    document.getElementById(name + numb).appendChild(tr);
}

function loadaddstand(numb, name, data){
    let status = data;
    let tag = "standability" + name;
    let defrow = 0;

    if(numb == 6){
        if(name == "battle"){
            defrow = defstandbattlenum6;
        }else if(name == "action"){
            defrow = defstandactionnum6;
        }
    }else if(numb == 7){
        if(name == "battle"){
            defrow = defstandbattlenum7;
        }else if(name == "action"){
            defrow = defstandactionnum7;
        }
    }

    for(let table = 0; table < status.length; table++){
        if(table < defrow){
            document.getElementsByName("ch"+tag+numb+table)[0].checked = status[table].growth;
            if(status[table].isinput) document.getElementsByName(tag+"name"+numb+table)[0].value = status[table].inputname;
            document.getElementsByName("def"+tag+numb+table)[0].value = status[table].num[0];
            document.getElementsByName("cor"+tag+numb+table)[0].value = status[table].num[1];
            document.getElementsByName("pl"+tag+numb+table)[0].value = status[table].num[2];
            document.getElementsByName("add"+tag+numb+table)[0].value = status[table].num[3];
            document.getElementsByName("to"+tag+numb+table)[0].value = status[table].num[4];
        }else{
            addstandload(numb, tag, status[table]);
        }
    }
}

function additemsload(numb, data){
    let tr = document.createElement("tr");
    var row = document.getElementById("items"+numb).rows.length - 1;
    const td = [];
    for(let i = 0; i < 3; i++){
        td.push(document.createElement("td"));
    }

    let name = document.createElement("input");
    name.type = "text";
    name.name = "itemsname"+numb+row;
    name.value = data.name;
    td[0].appendChild(name);

    let num = document.createElement("input");
    num.type = "text";
    num.name = "itemsnum"+numb+row;
    num.size = "2";
    num.value = data.num;
    td[1].appendChild(num);

    let detail = document.createElement("input");
    detail.type = "text";
    detail.name = "itemsdetail"+numb+row;
    detail.size = "30";
    detail.value = data.detail;
    td[2].appendChild(detail);

    for(let i = 0; i < 3; i++){
        tr.appendChild(td[i]);
    }
    document.getElementById("items"+numb).appendChild(tr);
}

function loadadditems(numb, data){
    let status = data;

    for(let table = 0; table < status.length; table++){
        additemsload(numb, status[table]);
    }
}