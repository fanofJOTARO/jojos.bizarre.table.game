let defpcbattlenum = 0;
let defpcsearchnum = 0;
let defpcactionnum = 0;
let defpcnegotiationsnum = 0;
let defpcknowledgenum = 0;
let defpcetcnum = 0;
let defpcitemsnum = 0;
let defstandbattlenum = 0;
let defstandactionnum = 0;

function create6(){
    adddef6("battle", "波紋", "0");
    adddef6("battle", "こぶし", "50");
    adddef6("battle", "回避", Number(document.status6.dex2.value)*2);
    adddef6("battle", "キック", "25");
    adddef6("battle", "頭突き", "10");
    adddef6("battle", "組みつき", "25");
    adddef6("battle", "投擲", "25");
    adddef6("battle", "マーシャルアーツ", "1");
    adddef6("battle", "拳銃", "20");
    adddef6("battle", "サブマシンガン", "15");
    adddef6("battle", "ショットガン", "30");
    adddef6("battle", "マシンガン", "15");
    adddef6("battle", "ライフル", "25");

    adddef6("search", "応急処置", "30", false);
    adddef6("search", "鍵開け", "1", false);
    adddef6("search", "隠す", "15", false);
    adddef6("search", "隠れる", "10", false);
    adddef6("search", "聞き耳", "25", false);
    adddef6("search", "忍び歩き", "10", false);
    adddef6("search", "写真術", "10", false);
    adddef6("search", "精神分析", "1", false);
    adddef6("search", "追跡", "10", false);
    adddef6("search", "登攀", "40", false);
    adddef6("search", "図書館", "25", false);
    adddef6("search", "目星", "25", false);

    adddef6("action", "運転", "20", true, "drive");
    adddef6("action", "修理", "20", false);
    adddef6("action", "重機械操作", "1", false);
    adddef6("action", "乗馬", "5", false);
    adddef6("action", "水泳", "25", false);
    adddef6("action", "製作", "5", true, "makes");
    adddef6("action", "電気修理", "10", false);
    adddef6("action", "機械操作", "1", true, "ride");
    adddef6("action", "跳躍", "25", false);
    adddef6("action", "ナビゲート", "10", false);
    adddef6("action", "変装", "1", false);

    adddef6("negotiations", "言いくるめ", "5", false);
    adddef6("negotiations", "信用", "15", false);
    adddef6("negotiations", "説得", "15", false);
    adddef6("negotiations", "値切り交渉", "5", false);
    adddef6("negotiations", "母国語", "20", true, "native");

    adddef6("knowledge", "医学", "5", false);
    adddef6("knowledge", "オカルト", "5", false);
    adddef6("knowledge", "化学", "5", false);
    adddef6("knowledge", "クトゥルフ神話知識", "0", false);
    adddef6("knowledge", "芸術", "5", true, "arts");
    adddef6("knowledge", "経理", "10", false);
    adddef6("knowledge", "考古学", "1", false);
    adddef6("knowledge", "コンピューター", "1", false);
    adddef6("knowledge", "心理学", "5", false);
    adddef6("knowledge", "人類学", "1", false);
    adddef6("knowledge", "生物学", "1", false);
    adddef6("knowledge", "地質学", "1", false);
    adddef6("knowledge", "電子工学", "1", false);
    adddef6("knowledge", "天文学", "1", false);
    adddef6("knowledge", "博物学", "10", false);
    adddef6("knowledge", "物理学", "1", false);
    adddef6("knowledge", "海洋学", "1", false);
    adddef6("knowledge", "言語学", "1", false);
    adddef6("knowledge", "法律", "5", false);
    adddef6("knowledge", "薬学", "1", false);
    adddef6("knowledge", "歴史", "20", false);

    adddef6("standabilitybattle", "こぶしS", "50", false);
    adddef6("standabilitybattle", "キックS", "25", false);
    adddef6("standabilitybattle", "回避S", "0", false);
    adddef6("standabilitybattle", "組みつきS", "25", false);
    adddef6("standabilitybattle", "投擲S", "50", false);
    
    adddef6("standabilityaction", "スタンド能力", "0", false);
    adddef6("standabilityaction", "目星S", "25", false);
    adddef6("standabilityaction", "聞き耳S", "25", false);
    adddef6("standabilityaction", "登攀S", "50", false);
    adddef6("standabilityaction", "水泳S", "25", false);
    if(document.status6.usestand.value == true){
        document.status6.defbattle66.value = 50;
        document.status6.defsearch69.value = 50;
        document.status6.defaction68.value = 50;
    }else{
        document.status6.defbattle66.value = 25;
        document.status6.defsearch69.value = 40;
        document.status6.defaction68.value = 25;
    }
    reset6();
}

function reset6(){
    var standabilitybattle = document.getElementById("standabilitybattle6");
    var standabilityaction = document.getElementById("standabilityaction6");
    var battle = document.getElementById("battle6");
    var search = document.getElementById("search6");
    var action = document.getElementById("action6");
    var negotiations = document.getElementById("negotiations6");
    var knowledge = document.getElementById("knowledge6");
    
    for(let table = 0; table < standabilitybattle.rows.length-1; table++){
        var def = Number(document.getElementsByName("defstandabilitybattle6"+table)[0].value);
        var cor = Number(document.getElementsByName("corstandabilitybattle6"+table)[0].value);
        var pl = 0;
        var add = 0;

        var sum = def+cor+pl+add;
        document.getElementsByName("plstandabilitybattle6"+table)[0].value = pl;
        document.getElementsByName("addstandabilitybattle6"+table)[0].value = add;
        document.getElementsByName("tostandabilitybattle6"+table)[0].value = sum;
    }
    
    for(let table = 0; table < standabilityaction.rows.length-1; table++){
        var def = Number(document.getElementsByName("defstandabilityaction6"+table)[0].value);
        var cor = Number(document.getElementsByName("corstandabilityaction6"+table)[0].value);
        var pl = 0;
        var add = 0;
        
        var sum = def+cor+pl+add;

        document.getElementsByName("plstandabilityaction6"+table)[0].value = 0;
        document.getElementsByName("addstandabilityaction6"+table)[0].value = 0;
        document.getElementsByName("tostandabilityaction6"+table)[0].value = sum;
    }

    for(let table = 0; table < battle.rows.length-1; table++){
        var def = Number(document.getElementsByName("defbattle6"+table)[0].value);
        //var bp = Number(document.getElementsByName("bpbattle"+table)[0].value);
        //var ip = Number(document.getElementsByName("ipbattle"+table)[0].value);
        //var pl = Number(document.getElementsByName("plbattle"+table)[0].value);
        //var add = Number(document.getElementsByName("addbattle"+table)[0].value);

        var sum = def;

        document.getElementsByName("bpbattle6"+table)[0].value = 0;
        document.getElementsByName("ipbattle6"+table)[0].value = 0;
        document.getElementsByName("plbattle6"+table)[0].value = 0;
        document.getElementsByName("addbattle6"+table)[0].value = 0;
        document.getElementsByName("tobattle6"+table)[0].value = sum;
    }

    for(let table = 0; table < search.rows.length-1; table++){
        var def = Number(document.getElementsByName("defsearch6"+table)[0].value);
        //var bp = Number(document.getElementsByName("bpsearch"+table)[0].value);
        //var ip = Number(document.getElementsByName("ipsearch"+table)[0].value);
        //var pl = Number(document.getElementsByName("plsearch"+table)[0].value);
        //var add = Number(document.getElementsByName("addsearch"+table)[0].value);

        var sum = def;

        document.getElementsByName("bpsearch6"+table)[0].value = 0;
        document.getElementsByName("ipsearch6"+table)[0].value = 0;
        document.getElementsByName("plsearch6"+table)[0].value = 0;
        document.getElementsByName("addsearch6"+table)[0].value = 0;
        document.getElementsByName("tosearch6"+table)[0].value = sum;
    }

    for(let table = 0; table < action.rows.length-1; table++){
        var def = Number(document.getElementsByName("defaction6"+table)[0].value);
        //var bp = Number(document.getElementsByName("bpaction"+table)[0].value);
        //var ip = Number(document.getElementsByName("ipaction"+table)[0].value);
        //var pl = Number(document.getElementsByName("plaction"+table)[0].value);
        //var add = Number(document.getElementsByName("addaction"+table)[0].value);

        var sum = def;

        document.getElementsByName("bpaction6"+table)[0].value = 0;
        document.getElementsByName("ipaction6"+table)[0].value = 0;
        document.getElementsByName("plaction6"+table)[0].value = 0;
        document.getElementsByName("addaction6"+table)[0].value = 0;
        document.getElementsByName("toaction6"+table)[0].value = sum;
    }

    for(let table = 0; table < negotiations.rows.length-1; table++){
        var def = Number(document.getElementsByName("defnegotiations6"+table)[0].value);
        //var bp = Number(document.getElementsByName("bpnegotiations"+table)[0].value);
        //var ip = Number(document.getElementsByName("ipnegotiations"+table)[0].value);
        //var pl = Number(document.getElementsByName("plnegotiations"+table)[0].value);
        //var add = Number(document.getElementsByName("addnegotiations"+table)[0].value);

        var sum = def;

        document.getElementsByName("bpnegotiations6"+table)[0].value = 0;
        document.getElementsByName("ipnegotiations6"+table)[0].value = 0;
        document.getElementsByName("plnegotiations6"+table)[0].value = 0;
        document.getElementsByName("addnegotiations6"+table)[0].value = 0;
        document.getElementsByName("tonegotiations6"+table)[0].value = sum;
    }

    for(let table = 0; table < knowledge.rows.length-1; table++){
        var def = Number(document.getElementsByName("defknowledge6"+table)[0].value);
        //var bp = Number(document.getElementsByName("bpknowledge"+table)[0].value);
        //var ip = Number(document.getElementsByName("ipknowledge"+table)[0].value);
        //var pl = Number(document.getElementsByName("plknowledge"+table)[0].value);
        //var add = Number(document.getElementsByName("addknowledge"+table)[0].value);

        var sum = def;

        document.getElementsByName("bpknowledge6"+table)[0].value = 0;
        document.getElementsByName("ipknowledge6"+table)[0].value = 0;
        document.getElementsByName("plknowledge6"+table)[0].value = 0;
        document.getElementsByName("addknowledge6"+table)[0].value = 0;
        document.getElementsByName("toknowledge6"+table)[0].value = sum;
    }
}

function adddef6(name, names, defval, intext, intexttag){
    let tr = document.createElement("tr");
    if(name == "battle"){
        defpcbattlenum++;
        var row = document.getElementById("battle6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        if(intext){
            let name = document.createTextNode(names);
            let inp = document.createElement("input");
            inp.type = "text";
            inp.size = "10";
            inp.name = "battlename6"+row;
            inp.className = "intext";
            inp.value = "()";
            name.name = intexttag;
            td[1].appendChild(name);
            td[1].appendChild(inp);
        }else{
            let name = document.createTextNode(names);
            name.name = "battlename6"+row;
            td[1].appendChild(name);
        }
        

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defbattle6"+row;
        def.size = "2";
        def.readOnly = "readonly";
        def.value = defval;
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpbattle6"+row;
        bp.size = "2";
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipbattle6"+row;
        ip.size = "2";
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plbattle6"+row;
        pl.size = "2";
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addbattle6"+row;
        add.size = "2";
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tobattle6"+row;
        to.size = "2";
        to.value = defval;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("battle6").appendChild(tr);

    }else if(name == "search"){
        defpcsearchnum++;
        var row = document.getElementById("search6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        if(intext){
            let name = document.createTextNode(names);
            let inp = document.createElement("input");
            inp.type = "text";
            inp.size = "10";
            inp.name = "searchname6"+row;
            inp.className = "intext";
            inp.value = "()";
            name.name = intexttag;
            td[1].appendChild(name);
            td[1].appendChild(inp);
        }else{
            let name = document.createTextNode(names);
            name.name = "searchname6"+row;
            td[1].appendChild(name);
        }
        

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defsearch6"+row;
        def.size = "2";
        def.readOnly = "readonly";
        def.value = defval;
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpsearch6"+row;
        bp.size = "2";
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipsearch6"+row;
        ip.size = "2";
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plsearch6"+row;
        pl.size = "2";
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addsearch6"+row;
        add.size = "2";
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tosearch6"+row;
        to.size = "2";
        to.value = defval;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("search6").appendChild(tr);
        
    }else if(name == "action"){
        defpcactionnum++;
        var row = document.getElementById("action6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        if(intext){
            let name = document.createTextNode(names);
            let inp = document.createElement("input");
            inp.type = "text";
            inp.size = "10";
            inp.name = "actionname6"+row;
            inp.className = "intext";
            inp.value = "()";
            name.name = intexttag;
            td[1].appendChild(name);
            td[1].appendChild(inp);
        }else{
            let name = document.createTextNode(names);
            name.name = "actionname6"+row;
            td[1].appendChild(name);
        }
        

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defaction6"+row;
        def.size = "2";
        def.readOnly = "readonly";
        def.value = defval;
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpaction6"+row;
        bp.size = "2";
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipaction6"+row;
        ip.size = "2";
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plaction6"+row;
        pl.size = "2";
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addaction6"+row;
        add.size = "2";
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "toaction6"+row;
        to.size = "2";
        to.value = defval;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("action6").appendChild(tr);
        
    }else if(name == "negotiations"){
        defpcnegotiationsnum++;
        var row = document.getElementById("negotiations6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        if(intext){
            let name = document.createTextNode(names);
            let inp = document.createElement("input");
            inp.type = "text";
            inp.size = "10";
            inp.name = "negotiationsname6"+row;
            inp.className = "intext";
            inp.value = "()";
            name.name = intexttag;
            td[1].appendChild(name);
            td[1].appendChild(inp);
        }else{
            let name = document.createTextNode(names);
            name.name = "negotiationsname6"+row;
            td[1].appendChild(name);
        }
        

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defnegotiations6"+row;
        def.size = "2";
        def.readOnly = "readonly";
        def.value = defval;
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpnegotiations6"+row;
        bp.size = "2";
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipnegotiations6"+row;
        ip.size = "2";
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plnegotiations6"+row;
        pl.size = "2";
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addnegotiations6"+row;
        add.size = "2";
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tonegotiations6"+row;
        to.size = "2";
        to.value = defval;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("negotiations6").appendChild(tr);
        
    }else if(name == "knowledge"){
        defpcknowledgenum++;
        var row = document.getElementById("knowledge6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        if(intext){
            let name = document.createTextNode(names);
            let inp = document.createElement("input");
            inp.type = "text";
            inp.size = "10";
            inp.name = "knowledgename6"+row;
            inp.className = "intext";
            inp.value = "()";
            name.name = intexttag;
            td[1].appendChild(name);
            td[1].appendChild(inp);
        }else{
            let name = document.createTextNode(names);
            name.name = "knowledgename6"+row;
            td[1].appendChild(name);
        }
        

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defknowledge6"+row;
        def.size = "2";
        def.readOnly = "readonly";
        def.value = defval;
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpknowledge6"+row;
        bp.size = "2";
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipknowledge6"+row;
        ip.size = "2";
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plknowledge6"+row;
        pl.size = "2";
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addknowledge6"+row;
        add.size = "2";
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "toknowledge6"+row;
        to.size = "2";
        to.value = defval;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("knowledge6").appendChild(tr);
        
    }else if(name == "standabilitybattle"){
        defstandbattlenum++;
        var row = document.getElementById("standabilitybattle6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 7; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        if(intext){
            let name = document.createTextNode(names);
            let inp = document.createElement("input");
            inp.type = "text";
            inp.size = "10";
            inp.name = "standabilitybattlename6"+row;
            inp.className = "intext";
            inp.value = "()";
            name.name = intexttag;
            td[1].appendChild(name);
            td[1].appendChild(inp);
        }else{
            let name = document.createTextNode(names);
            name.name = "standabilitybattlename6"+row;
            td[1].appendChild(name);
        }
        

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defstandabilitybattle6"+row;
        def.size = "2";
        def.readOnly = "readonly";
        def.value = defval;
        td[2].appendChild(def);

        let cor = document.createElement("input");
        cor.type = "text";
        cor.name = "corstandabilitybattle6"+row;
        cor.className = "corstandbattle6";
        cor.size = "2";
        cor.readOnly = "readonly";
        cor.value = "0";
        td[3].appendChild(cor);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plstandabilitybattle6"+row;
        pl.size = "2";
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addstandabilitybattle6"+row;
        add.size = "2";
        add.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tostandabilitybattle6"+row;
        to.size = "2";
        to.value = defval;
        to.readOnly = "readonly";
        td[6].appendChild(to);

        for(let i = 0; i < 7; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("standabilitybattle6").appendChild(tr);
        
    }else if(name == "standabilityaction"){
        defstandactionnum++;
        var row = document.getElementById("standabilityaction6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 7; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        if(intext){
            let name = document.createTextNode(names);
            let inp = document.createElement("input");
            inp.type = "text";
            inp.size = "10";
            inp.name = "standabilityactionname6"+row;
            inp.className = "intext";
            inp.value = "()";
            name.name = intexttag;
            td[1].appendChild(name);
            td[1].appendChild(inp);
        }else{
            let name = document.createTextNode(names);
            name.name = "standabilityactionname6"+row;
            td[1].appendChild(name);
        }
        

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defstandabilityaction6"+row;
        def.size = "2";
        def.readOnly = "readonly";
        def.value = defval;
        td[2].appendChild(def);

        let cor = document.createElement("input");
        cor.type = "text";
        cor.name = "corstandabilityaction6"+row;
        cor.className = "corstandaction6";
        cor.size = "2";
        cor.readOnly = "readonly";
        cor.value = "0";
        td[3].appendChild(cor);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plstandabilityaction6"+row;
        pl.size = "2";
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addstandabilityaction6"+row;
        add.size = "2";
        add.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tostandabilityaction6"+row;
        to.size = "2";
        to.value = defval;
        to.readOnly = "readonly";
        td[6].appendChild(to);

        for(let i = 0; i < 7; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("standabilityaction6").appendChild(tr);
        
    }
}

function add6(name){
    let tr = document.createElement("tr");
    if(name == "battle"){
        var row = document.getElementById("battle6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "battlename6"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defbattle6"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpbattle6"+row;
        bp.size = "2";
        bp.value = 0;
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipbattle6"+row;
        ip.size = "2";
        ip.value = 0;
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plbattle6"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addbattle6"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tobattle6"+row;
        to.size = "2";
        to.value = 0;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("battle6").appendChild(tr);
    }else if(name == "search"){
        var row = document.getElementById("search6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "searchname6"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defsearch6"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpsearch6"+row;
        bp.size = "2";
        bp.value = 0;
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipsearch6"+row;
        ip.size = "2";
        ip.value = 0;
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plsearch6"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addsearch6"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tosearch6"+row;
        to.size = "2";
        to.readOnly = "readonly";
        to.value = 0;
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("search6").appendChild(tr);
    }else if(name == "action"){
        var row = document.getElementById("action6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "actionname6"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defaction6"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpaction6"+row;
        bp.size = "2";
        bp.value = 0;
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipaction6"+row;
        ip.size = "2";
        ip.value = 0;
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plaction6"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addaction6"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "toaction6"+row;
        to.size = "2";
        to.readOnly = "readonly";
        to.value = 0;
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("action6").appendChild(tr);
    }else if(name == "negotiations"){
        var row = document.getElementById("negotiations6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "negotiationsname6"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defnegotiations6"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpnegotiations6"+row;
        bp.size = "2";
        bp.value = 0;
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipnegotiations6"+row;
        ip.size = "2";
        ip.value = 0;
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plnegotiations6"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addnegotiations6"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tonegotiations6"+row;
        to.size = "2";
        to.value = 0;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("negotiations6").appendChild(tr);
    }else if(name == "knowledge"){
        var row = document.getElementById("knowledge6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "knowledgename6"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defknowledge6"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpknowledge6"+row;
        bp.size = "2";
        bp.value = 0;
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipknowledge6"+row;
        ip.size = "2";
        ip.value = 0;
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plknowledge6"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addknowledge6"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "toknowledge6"+row;
        to.size = "2";
        to.value = 0;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("knowledge6").appendChild(tr);
    }else if(name == "etc"){
        var row = document.getElementById("etc6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "etcname6"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defetc6"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpetc6"+row;
        bp.size = "2";
        bp.value = 0;
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipetc6"+row;
        ip.size = "2";
        ip.value = 0;
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "pletc6"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addetc6"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "toetc6"+row;
        to.size = "2";
        to.value = 0;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("etc6").appendChild(tr);
    }else if(name == "standabilitybattle"){
        var row = document.getElementById("standabilitybattle6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 7; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "standabilitybattlename6"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defstandabilitybattle6"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let cor = document.createElement("input");
        cor.type = "text";
        cor.name = "corstandabilitybattle6"+row;
        cor.className = "corstandbattle6";
        cor.size = "2";
        cor.readOnly = "readonly";
        td[3].appendChild(cor);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plstandabilitybattle6"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addstandabilitybattle6"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tostandabilitybattle6"+row;
        to.size = "2";
        to.readOnly = "readonly";
        td[6].appendChild(to);

        for(let i = 0; i < 7; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("standabilitybattle6").appendChild(tr);
        calc6();
    }else if(name == "standabilityaction"){
        var row = document.getElementById("standabilityaction6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 7; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "standabilityactionname6"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defstandabilityaction6"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let cor = document.createElement("input");
        cor.type = "text";
        cor.name = "corstandabilityaction6"+row;
        cor.className = "corstandaction6";
        cor.size = "2";
        cor.readOnly = "readonly";
        td[3].appendChild(cor);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plstandabilityaction6"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addstandabilityaction6"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tostandabilityaction6"+row;
        to.size = "2";
        to.readOnly = "readonly";
        td[6].appendChild(to);

        for(let i = 0; i < 7; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("standabilityaction6").appendChild(tr);
        calc6();
    }else if(name == "items"){
        
        var row = document.getElementById("items6").rows.length - 1;
        const td = [];
        for(let i = 0; i < 3; i++){
            td.push(document.createElement("td"));
        }

        let name = document.createElement("input");
        name.type = "text";
        name.name = "itemsname6"+row;
        td[0].appendChild(name);

        let num = document.createElement("input");
        num.type = "text";
        num.name = "itemsnum6"+row;
        num.size = "2";
        td[1].appendChild(num);

        let detail = document.createElement("input");
        detail.type = "text";
        detail.name = "itemsdetail6"+row;
        detail.size = "30";
        td[2].appendChild(detail);

        for(let i = 0; i < 3; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("items6").appendChild(tr);
        calc6();
    }
}

function del6(name){
    if(name == "battle"){
        if(document.getElementById("battle6").rows.length > defpcbattlenum+1){
            document.getElementById("battle6").deleteRow(document.getElementById("battle6").rows.length - 1);
        }
    }else if(name == "search"){
        if(document.getElementById("search6").rows.length > defpcsearchnum+1){
            document.getElementById("search6").deleteRow(document.getElementById("search6").rows.length - 1);
        }
    }else if(name == "action"){
        if(document.getElementById("action6").rows.length > defpcactionnum+1){
            document.getElementById("action6").deleteRow(document.getElementById("action6").rows.length - 1);
        }
    }else if(name == "negotiations"){
        if(document.getElementById("negotiations6").rows.length > defpcnegotiationsnum+1){
            document.getElementById("negotiations6").deleteRow(document.getElementById("negotiations6").rows.length - 1);
        }
    }else if(name == "knowledge"){
        if(document.getElementById("knowledge6").rows.length > defpcknowledgenum+1){
            document.getElementById("knowledge6").deleteRow(document.getElementById("knowledge6").rows.length - 1);
        }
    }else if(name == "etc"){
        if(document.getElementById("etc6").rows.length > defpcetcnum+1){
            document.getElementById("etc6").deleteRow(document.getElementById("etc6").rows.length - 1);
        }
    }else if(name == "standabilitybattle"){
        if(document.getElementById("standabilitybattle6").rows.length > defstandbattlenum+1){
            document.getElementById("standabilitybattle6").deleteRow(document.getElementById("standabilitybattle6").rows.length - 1);
        }
    }else if(name == "standabilityaction"){
        if(document.getElementById("standabilityaction6").rows.length > defstandactionnum+1){
            document.getElementById("standabilityaction6").deleteRow(document.getElementById("standabilityaction6").rows.length - 1);
        }
    }else if(name == "items"){
        if(document.getElementById("items6").rows.length > defpcitemsnum+1){
            document.getElementById("items6").deleteRow(document.getElementById("items6").rows.length - 1);
        }
    }
}
