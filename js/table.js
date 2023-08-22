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
    adddef6("battle", "回避", Number(document.status.dex2.value)*2);
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
    if(document.status.usestand.value == true){
        document.status.defbattle6.value = 50;
        document.status.defsearch9.value = 50;
        document.status.defaction8.value = 50;
    }else{
        document.status.defbattle6.value = 25;
        document.status.defsearch9.value = 40;
        document.status.defaction8.value = 25;
    }
    reset6();
}

function reset6(){
    var standabilitybattle = document.getElementById("standabilitybattle");
    var standabilityaction = document.getElementById("standabilityaction");
    var battle = document.getElementById("battle");
    var search = document.getElementById("search");
    var action = document.getElementById("action");
    var negotiations = document.getElementById("negotiations");
    var knowledge = document.getElementById("knowledge");
    
    for(let table = 0; table < standabilitybattle.rows.length-1; table++){
        var def = Number(document.getElementsByName("defstandabilitybattle"+table)[0].value);
        var cor = Number(document.getElementsByName("corstandabilitybattle"+table)[0].value);
        var pl = 0;
        var add = 0;

        var sum = def+cor+pl+add;
        document.getElementsByName("plstandabilitybattle"+table)[0].value = pl;
        document.getElementsByName("addstandabilitybattle"+table)[0].value = add;
        document.getElementsByName("tostandabilitybattle"+table)[0].value = sum;
    }
    
    for(let table = 0; table < standabilityaction.rows.length-1; table++){
        var def = Number(document.getElementsByName("defstandabilityaction"+table)[0].value);
        var cor = Number(document.getElementsByName("corstandabilityaction"+table)[0].value);
        var pl = 0;
        var add = 0;
        
        var sum = def+cor+pl+add;

        document.getElementsByName("plstandabilityaction"+table)[0].value = 0;
        document.getElementsByName("addstandabilityaction"+table)[0].value = 0;
        document.getElementsByName("tostandabilityaction"+table)[0].value = sum;
    }

    for(let table = 0; table < battle.rows.length-1; table++){
        var def = Number(document.getElementsByName("defbattle"+table)[0].value);
        //var bp = Number(document.getElementsByName("bpbattle"+table)[0].value);
        //var ip = Number(document.getElementsByName("ipbattle"+table)[0].value);
        //var pl = Number(document.getElementsByName("plbattle"+table)[0].value);
        //var add = Number(document.getElementsByName("addbattle"+table)[0].value);

        var sum = def;

        document.getElementsByName("bpbattle"+table)[0].value = 0;
        document.getElementsByName("ipbattle"+table)[0].value = 0;
        document.getElementsByName("plbattle"+table)[0].value = 0;
        document.getElementsByName("addbattle"+table)[0].value = 0;
        document.getElementsByName("tobattle"+table)[0].value = sum;
    }

    for(let table = 0; table < search.rows.length-1; table++){
        var def = Number(document.getElementsByName("defsearch"+table)[0].value);
        //var bp = Number(document.getElementsByName("bpsearch"+table)[0].value);
        //var ip = Number(document.getElementsByName("ipsearch"+table)[0].value);
        //var pl = Number(document.getElementsByName("plsearch"+table)[0].value);
        //var add = Number(document.getElementsByName("addsearch"+table)[0].value);

        var sum = def;

        document.getElementsByName("bpsearch"+table)[0].value = 0;
        document.getElementsByName("ipsearch"+table)[0].value = 0;
        document.getElementsByName("plsearch"+table)[0].value = 0;
        document.getElementsByName("addsearch"+table)[0].value = 0;
        document.getElementsByName("tosearch"+table)[0].value = sum;
    }

    for(let table = 0; table < action.rows.length-1; table++){
        var def = Number(document.getElementsByName("defaction"+table)[0].value);
        //var bp = Number(document.getElementsByName("bpaction"+table)[0].value);
        //var ip = Number(document.getElementsByName("ipaction"+table)[0].value);
        //var pl = Number(document.getElementsByName("plaction"+table)[0].value);
        //var add = Number(document.getElementsByName("addaction"+table)[0].value);

        var sum = def;

        document.getElementsByName("bpaction"+table)[0].value = 0;
        document.getElementsByName("ipaction"+table)[0].value = 0;
        document.getElementsByName("plaction"+table)[0].value = 0;
        document.getElementsByName("addaction"+table)[0].value = 0;
        document.getElementsByName("toaction"+table)[0].value = sum;
    }

    for(let table = 0; table < negotiations.rows.length-1; table++){
        var def = Number(document.getElementsByName("defnegotiations"+table)[0].value);
        //var bp = Number(document.getElementsByName("bpnegotiations"+table)[0].value);
        //var ip = Number(document.getElementsByName("ipnegotiations"+table)[0].value);
        //var pl = Number(document.getElementsByName("plnegotiations"+table)[0].value);
        //var add = Number(document.getElementsByName("addnegotiations"+table)[0].value);

        var sum = def;

        document.getElementsByName("bpnegotiations"+table)[0].value = 0;
        document.getElementsByName("ipnegotiations"+table)[0].value = 0;
        document.getElementsByName("plnegotiations"+table)[0].value = 0;
        document.getElementsByName("addnegotiations"+table)[0].value = 0;
        document.getElementsByName("tonegotiations"+table)[0].value = sum;
    }

    for(let table = 0; table < knowledge.rows.length-1; table++){
        var def = Number(document.getElementsByName("defknowledge"+table)[0].value);
        //var bp = Number(document.getElementsByName("bpknowledge"+table)[0].value);
        //var ip = Number(document.getElementsByName("ipknowledge"+table)[0].value);
        //var pl = Number(document.getElementsByName("plknowledge"+table)[0].value);
        //var add = Number(document.getElementsByName("addknowledge"+table)[0].value);

        var sum = def;

        document.getElementsByName("bpknowledge"+table)[0].value = 0;
        document.getElementsByName("ipknowledge"+table)[0].value = 0;
        document.getElementsByName("plknowledge"+table)[0].value = 0;
        document.getElementsByName("addknowledge"+table)[0].value = 0;
        document.getElementsByName("toknowledge"+table)[0].value = sum;
    }
}

function adddef6(name, names, defval, intext, intexttag){
    let tr = document.createElement("tr");
    if(name == "battle"){
        defpcbattlenum++;
        var row = document.getElementById("battle").rows.length - 1;
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
            inp.name = "battlename"+row;
            inp.className = "intext";
            inp.value = "()";
            name.name = intexttag;
            td[1].appendChild(name);
            td[1].appendChild(inp);
        }else{
            let name = document.createTextNode(names);
            name.name = "battlename"+row;
            td[1].appendChild(name);
        }
        

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defbattle"+row;
        def.size = "2";
        def.readOnly = "readonly";
        def.value = defval;
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpbattle"+row;
        bp.size = "2";
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipbattle"+row;
        ip.size = "2";
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plbattle"+row;
        pl.size = "2";
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addbattle"+row;
        add.size = "2";
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tobattle"+row;
        to.size = "2";
        to.value = defval;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("battle").appendChild(tr);

    }else if(name == "search"){
        defpcsearchnum++;
        var row = document.getElementById("search").rows.length - 1;
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
            inp.name = "searchname"+row;
            inp.className = "intext";
            inp.value = "()";
            name.name = intexttag;
            td[1].appendChild(name);
            td[1].appendChild(inp);
        }else{
            let name = document.createTextNode(names);
            name.name = "searchname"+row;
            td[1].appendChild(name);
        }
        

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defsearch"+row;
        def.size = "2";
        def.readOnly = "readonly";
        def.value = defval;
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpsearch"+row;
        bp.size = "2";
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipsearch"+row;
        ip.size = "2";
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plsearch"+row;
        pl.size = "2";
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addsearch"+row;
        add.size = "2";
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tosearch"+row;
        to.size = "2";
        to.value = defval;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("search").appendChild(tr);
        
    }else if(name == "action"){
        defpcactionnum++;
        var row = document.getElementById("action").rows.length - 1;
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
            inp.name = "actionname"+row;
            inp.className = "intext";
            inp.value = "()";
            name.name = intexttag;
            td[1].appendChild(name);
            td[1].appendChild(inp);
        }else{
            let name = document.createTextNode(names);
            name.name = "actionname"+row;
            td[1].appendChild(name);
        }
        

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defaction"+row;
        def.size = "2";
        def.readOnly = "readonly";
        def.value = defval;
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpaction"+row;
        bp.size = "2";
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipaction"+row;
        ip.size = "2";
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plaction"+row;
        pl.size = "2";
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addaction"+row;
        add.size = "2";
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "toaction"+row;
        to.size = "2";
        to.value = defval;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("action").appendChild(tr);
        
    }else if(name == "negotiations"){
        defpcnegotiationsnum++;
        var row = document.getElementById("negotiations").rows.length - 1;
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
            inp.name = "negotiationsname"+row;
            inp.className = "intext";
            inp.value = "()";
            name.name = intexttag;
            td[1].appendChild(name);
            td[1].appendChild(inp);
        }else{
            let name = document.createTextNode(names);
            name.name = "negotiationsname"+row;
            td[1].appendChild(name);
        }
        

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defnegotiations"+row;
        def.size = "2";
        def.readOnly = "readonly";
        def.value = defval;
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpnegotiations"+row;
        bp.size = "2";
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipnegotiations"+row;
        ip.size = "2";
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plnegotiations"+row;
        pl.size = "2";
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addnegotiations"+row;
        add.size = "2";
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tonegotiations"+row;
        to.size = "2";
        to.value = defval;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("negotiations").appendChild(tr);
        
    }else if(name == "knowledge"){
        defpcknowledgenum++;
        var row = document.getElementById("knowledge").rows.length - 1;
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
            inp.name = "knowledgename"+row;
            inp.className = "intext";
            inp.value = "()";
            name.name = intexttag;
            td[1].appendChild(name);
            td[1].appendChild(inp);
        }else{
            let name = document.createTextNode(names);
            name.name = "knowledgename"+row;
            td[1].appendChild(name);
        }
        

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defknowledge"+row;
        def.size = "2";
        def.readOnly = "readonly";
        def.value = defval;
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpknowledge"+row;
        bp.size = "2";
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipknowledge"+row;
        ip.size = "2";
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plknowledge"+row;
        pl.size = "2";
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addknowledge"+row;
        add.size = "2";
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "toknowledge"+row;
        to.size = "2";
        to.value = defval;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("knowledge").appendChild(tr);
        
    }else if(name == "standabilitybattle"){
        defstandbattlenum++;
        var row = document.getElementById("standabilitybattle").rows.length - 1;
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
            inp.name = "standabilitybattlename"+row;
            inp.className = "intext";
            inp.value = "()";
            name.name = intexttag;
            td[1].appendChild(name);
            td[1].appendChild(inp);
        }else{
            let name = document.createTextNode(names);
            name.name = "standabilitybattlename"+row;
            td[1].appendChild(name);
        }
        

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defstandabilitybattle"+row;
        def.size = "2";
        def.readOnly = "readonly";
        def.value = defval;
        td[2].appendChild(def);

        let cor = document.createElement("input");
        cor.type = "text";
        cor.name = "corstandabilitybattle"+row;
        cor.className = "corstandbattle";
        cor.size = "2";
        cor.readOnly = "readonly";
        cor.value = "0";
        td[3].appendChild(cor);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plstandabilitybattle"+row;
        pl.size = "2";
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addstandabilitybattle"+row;
        add.size = "2";
        add.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tostandabilitybattle"+row;
        to.size = "2";
        to.value = defval;
        to.readOnly = "readonly";
        td[6].appendChild(to);

        for(let i = 0; i < 7; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("standabilitybattle").appendChild(tr);
        
    }else if(name == "standabilityaction"){
        defstandactionnum++;
        var row = document.getElementById("standabilityaction").rows.length - 1;
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
            inp.name = "standabilityactionname"+row;
            inp.className = "intext";
            inp.value = "()";
            name.name = intexttag;
            td[1].appendChild(name);
            td[1].appendChild(inp);
        }else{
            let name = document.createTextNode(names);
            name.name = "standabilityactionname"+row;
            td[1].appendChild(name);
        }
        

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defstandabilityaction"+row;
        def.size = "2";
        def.readOnly = "readonly";
        def.value = defval;
        td[2].appendChild(def);

        let cor = document.createElement("input");
        cor.type = "text";
        cor.name = "corstandabilityaction"+row;
        cor.className = "corstandaction";
        cor.size = "2";
        cor.readOnly = "readonly";
        cor.value = "0";
        td[3].appendChild(cor);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plstandabilityaction"+row;
        pl.size = "2";
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addstandabilityaction"+row;
        add.size = "2";
        add.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tostandabilityaction"+row;
        to.size = "2";
        to.value = defval;
        to.readOnly = "readonly";
        td[6].appendChild(to);

        for(let i = 0; i < 7; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("standabilityaction").appendChild(tr);
        
    }
}

function add6(name){
    let tr = document.createElement("tr");
    if(name == "battle"){
        var row = document.getElementById("battle").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "battlename"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defbattle"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpbattle"+row;
        bp.size = "2";
        bp.value = 0;
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipbattle"+row;
        ip.size = "2";
        ip.value = 0;
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plbattle"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addbattle"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tobattle"+row;
        to.size = "2";
        to.value = 0;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("battle").appendChild(tr);
    }else if(name == "search"){
        var row = document.getElementById("search").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "searchname"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defsearch"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpsearch"+row;
        bp.size = "2";
        bp.value = 0;
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipsearch"+row;
        ip.size = "2";
        ip.value = 0;
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plsearch"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addsearch"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tosearch"+row;
        to.size = "2";
        to.readOnly = "readonly";
        to.value = 0;
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("search").appendChild(tr);
    }else if(name == "action"){
        var row = document.getElementById("action").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "actionname"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defaction"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpaction"+row;
        bp.size = "2";
        bp.value = 0;
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipaction"+row;
        ip.size = "2";
        ip.value = 0;
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plaction"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addaction"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "toaction"+row;
        to.size = "2";
        to.readOnly = "readonly";
        to.value = 0;
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("action").appendChild(tr);
    }else if(name == "negotiations"){
        var row = document.getElementById("negotiations").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "negotiationsname"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defnegotiations"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpnegotiations"+row;
        bp.size = "2";
        bp.value = 0;
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipnegotiations"+row;
        ip.size = "2";
        ip.value = 0;
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plnegotiations"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addnegotiations"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tonegotiations"+row;
        to.size = "2";
        to.value = 0;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("negotiations").appendChild(tr);
    }else if(name == "knowledge"){
        var row = document.getElementById("knowledge").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "knowledgename"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defknowledge"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpknowledge"+row;
        bp.size = "2";
        bp.value = 0;
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipknowledge"+row;
        ip.size = "2";
        ip.value = 0;
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plknowledge"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addknowledge"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "toknowledge"+row;
        to.size = "2";
        to.value = 0;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("knowledge").appendChild(tr);
    }else if(name == "etc"){
        var row = document.getElementById("etc").rows.length - 1;
        const td = [];
        for(let i = 0; i < 8; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "etcname"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defetc"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let bp = document.createElement("input");
        bp.type = "text";
        bp.name = "bpetc"+row;
        bp.size = "2";
        bp.value = 0;
        bp.addEventListener("change", (event) => {calcstatus6()});
        td[3].appendChild(bp);
        
        let ip = document.createElement("input");
        ip.type = "text";
        ip.name = "ipetc"+row;
        ip.size = "2";
        ip.value = 0;
        ip.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(ip);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "pletc"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addetc"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[6].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "toetc"+row;
        to.size = "2";
        to.value = 0;
        to.readOnly = "readonly";
        td[7].appendChild(to);

        for(let i = 0; i < 8; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("etc").appendChild(tr);
    }else if(name == "standabilitybattle"){
        var row = document.getElementById("standabilitybattle").rows.length - 1;
        const td = [];
        for(let i = 0; i < 7; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "standabilitybattlename"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defstandabilitybattle"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let cor = document.createElement("input");
        cor.type = "text";
        cor.name = "corstandabilitybattle"+row;
        cor.className = "corstandbattle";
        cor.size = "2";
        cor.readOnly = "readonly";
        td[3].appendChild(cor);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plstandabilitybattle"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addstandabilitybattle"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tostandabilitybattle"+row;
        to.size = "2";
        to.readOnly = "readonly";
        td[6].appendChild(to);

        for(let i = 0; i < 7; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("standabilitybattle").appendChild(tr);
        calc6();
    }else if(name == "standabilityaction"){
        var row = document.getElementById("standabilityaction").rows.length - 1;
        const td = [];
        for(let i = 0; i < 7; i++){
            td.push(document.createElement("td"));
        }

        let ch = document.createElement("input");
        ch.type = "checkbox";
        td[0].appendChild(ch);

        let name = document.createElement("input");
        name.type = "text";
        name.name = "standabilityactionname"+row;
        name.size = "16";
        td[1].appendChild(name);

        let def = document.createElement("input");
        def.type = "text";
        def.name = "defstandabilityaction"+row;
        def.size = "2";
        def.value = 0;
        def.addEventListener("change", (event) => {calcstatus6()});
        td[2].appendChild(def);

        let cor = document.createElement("input");
        cor.type = "text";
        cor.name = "corstandabilityaction"+row;
        cor.className = "corstandaction";
        cor.size = "2";
        cor.readOnly = "readonly";
        td[3].appendChild(cor);

        let pl = document.createElement("input");
        pl.type = "text";
        pl.name = "plstandabilityaction"+row;
        pl.size = "2";
        pl.value = 0;
        pl.addEventListener("change", (event) => {calcstatus6()});
        td[4].appendChild(pl);

        let add = document.createElement("input");
        add.type = "text";
        add.name = "addstandabilityaction"+row;
        add.size = "2";
        add.value = 0;
        add.addEventListener("change", (event) => {calcstatus6()});
        td[5].appendChild(add);

        let to = document.createElement("input");
        to.type = "text";
        to.name = "tostandabilityaction"+row;
        to.size = "2";
        to.readOnly = "readonly";
        td[6].appendChild(to);

        for(let i = 0; i < 7; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("standabilityaction").appendChild(tr);
        calc6();
    }else if(name == "items"){
        
        var row = document.getElementById("items").rows.length - 1;
        const td = [];
        for(let i = 0; i < 3; i++){
            td.push(document.createElement("td"));
        }

        let name = document.createElement("input");
        name.type = "text";
        name.name = "itemsname"+row;
        td[0].appendChild(name);

        let num = document.createElement("input");
        num.type = "text";
        num.name = "itemsnum"+row;
        num.size = "2";
        td[1].appendChild(num);

        let detail = document.createElement("input");
        detail.type = "text";
        detail.name = "itemsdetail"+row;
        detail.size = "30";
        td[2].appendChild(detail);

        for(let i = 0; i < 3; i++){
            tr.appendChild(td[i]);
        }
        document.getElementById("items").appendChild(tr);
        calc6();
    }
}

function del6(name){
    if(name == "battle"){
        if(document.getElementById("battle").rows.length > defpcbattlenum+1){
            document.getElementById("battle").deleteRow(document.getElementById("battle").rows.length - 1);
        }
    }else if(name == "search"){
        if(document.getElementById("search").rows.length > defpcsearchnum+1){
            document.getElementById("search").deleteRow(document.getElementById("search").rows.length - 1);
        }
    }else if(name == "action"){
        if(document.getElementById("action").rows.length > defpcactionnum+1){
            document.getElementById("action").deleteRow(document.getElementById("action").rows.length - 1);
        }
    }else if(name == "negotiations"){
        if(document.getElementById("negotiations").rows.length > defpcnegotiationsnum+1){
            document.getElementById("negotiations").deleteRow(document.getElementById("negotiations").rows.length - 1);
        }
    }else if(name == "knowledge"){
        if(document.getElementById("knowledge").rows.length > defpcknowledgenum+1){
            document.getElementById("knowledge").deleteRow(document.getElementById("knowledge").rows.length - 1);
        }
    }else if(name == "etc"){
        if(document.getElementById("etc").rows.length > defpcetcnum+1){
            document.getElementById("etc").deleteRow(document.getElementById("etc").rows.length - 1);
        }
    }else if(name == "standabilitybattle"){
        if(document.getElementById("standabilitybattle").rows.length > defstandbattlenum+1){
            document.getElementById("standabilitybattle").deleteRow(document.getElementById("standabilitybattle").rows.length - 1);
        }
    }else if(name == "standabilityaction"){
        if(document.getElementById("standabilityaction").rows.length > defstandactionnum+1){
            document.getElementById("standabilityaction").deleteRow(document.getElementById("standabilityaction").rows.length - 1);
        }
    }else if(name == "items"){
        if(document.getElementById("items").rows.length > defpcitemsnum+1){
            document.getElementById("items").deleteRow(document.getElementById("items").rows.length - 1);
        }
    }
}