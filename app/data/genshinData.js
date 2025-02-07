const initialCharacters = [
    {
        name: 'Freminet',
        vision: '/img/Cryo.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Male',
        nation: '/img/Fontaine.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/freminet/icon-big'
    },
    {
        name: 'Kachina',
        vision: '/img/Geo.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Female',
        nation: '/img/Natlan.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/kachina/icon-big'
    },
    {
        name: 'Chongyun',
        vision: '/img/Cryo.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Male',
        nation: '/img/Liyue.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/chongyun/icon-big'
    },
    {
        name: 'Navia',
        vision: '/img/Geo.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Female',
        nation: '/img/Fontaine.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/navia/icon-big'
    },
    {
        name: 'Kamisato Ayato',
        vision: '/img/Hydro.webp',
        weapon: '/img/Sword.webp',
        gender: 'Male',
        nation: '/img/Inazuma.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/ayato/icon-big'
    },
    {
        name: 'Albedo',
        vision: '/img/Geo.webp',
        weapon: '/img/Sword.webp',
        gender: 'Male',
        nation: '/img/Mondstadt.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/albedo/icon-big'
    },
    {
        name: 'Kinich',
        vision: '/img/Dendro.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Male',
        nation: '/img/Natlan.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/kinich/icon-big'
    },
    {
        name: 'Barbara',
        vision: '/img/Hydro.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Female',
        nation: '/img/Mondstadt.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/barbara/icon-big'
    },
    {
        name: 'Eula',
        vision: '/img/Cryo.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Female',
        nation: '/img/Mondstadt.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/eula/icon-big'
    },
    {
        name: 'Dori',
        vision: '/img/Electro.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Female',
        nation: '/img/Sumeru.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/dori/icon-big'
    },
    {
        name: 'Amber',
        vision: '/img/Pyro.webp',
        weapon: '/img/Bow.webp',
        gender: 'Female',
        nation: '/img/Mondstadt.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/amber/icon-big'
    },
    {
        name: 'Gaming',
        vision: '/img/Pyro.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Male',
        nation: '/img/Liyue.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/gaming/icon-big'
    },
    {
        name: 'Emilie',
        vision: '/img/Dendro.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Female',
        nation: '/img/Fontaine.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/emilie/icon-big'
    },
    {
        name: 'Beidou',
        vision: '/img/Electro.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Female',
        nation: '/img/Liyue.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/beidou/icon-big'
    },
    {
        name: 'Thoma',
        vision: '/img/Pyro.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Male',
        nation: '/img/Mondstadt.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/thoma/icon-big'
    },
    {
        name: 'Bennett',
        vision: '/img/Pyro.webp',
        weapon: '/img/Sword.webp',
        gender: 'Male',
        nation: '/img/Mondstadt.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/bennett/icon-big'
    },
    {
        name: 'Jean',
        vision: '/img/Anemo.webp',
        weapon: '/img/Sword.webp',
        gender: 'Female',
        nation: '/img/Mondstadt.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/jean/icon-big'
    },
    {
        name: 'Raiden Shogun',
        vision: '/img/Electro.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Female',
        nation: '/img/Inazuma.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/raiden/icon-big'
    },
    {
        name: 'Keqing',
        vision: '/img/Electro.webp',
        weapon: '/img/Sword.webp',
        gender: 'Female',
        nation: '/img/Liyue.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/keqing/icon-big'
    },
    {
        name: 'Gorou',
        vision: '/img/Geo.webp',
        weapon: '/img/Bow.webp',
        gender: 'Male',
        nation: '/img/Inazuma.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/gorou/icon-big'
    },
    {
        name: 'Mualani',
        vision: '/img/Hydro.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Female',
        nation: '/img/Natlan.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/mualani/icon-big'
    },
    {
        name: 'Mika',
        vision: '/img/Cryo.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Male',
        nation: '/img/Mondstadt.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/mika/icon-big'
    },
    {
        name: 'Sangonomiya Kokomi',
        vision: '/img/Hydro.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Female',
        nation: '/img/Inazuma.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/kokomi/icon-big'
    },
    {
        name: 'Faruzan',
        vision: '/img/Anemo.webp',
        weapon: '/img/Bow.webp',
        gender: 'Female',
        nation: '/img/Sumeru.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/faruzan/icon-big'
    },
    {
        name: 'Ganyu',
        vision: '/img/Cryo.webp',
        weapon: '/img/Bow.webp',
        gender: 'Female',
        nation: '/img/Liyue.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/ganyu/icon-big'
    },
    {
        name: 'Sucrose',
        vision: '/img/Anemo.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Female',
        nation: '/img/Mondstadt.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/sucrose/icon-big'
    },
    {
        name: 'Sigewinne',
        vision: '/img/Hydro.webp',
        weapon: '/img/Bow.webp',
        gender: 'Female',
        nation: '/img/Fontaine.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/sigewinne/icon-big'
    },
    {
        name: 'Kaedehara Kazuha',
        vision: '/img/Anemo.webp',
        weapon: '/img/Sword.webp',
        gender: 'Male',
        nation: '/img/Inazuma.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/kazuha/icon-big'
    },
    {
        name: 'Nilou',
        vision: '/img/Hydro.webp',
        weapon: '/img/Sword.webp',
        gender: 'Female',
        nation: '/img/Sumeru.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/nilou/icon-big'
    },
    {
        name: 'Yelan',
        vision: '/img/Hydro.webp',
        weapon: '/img/Bow.webp',
        gender: 'Female',
        nation: '/img/Liyue.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/yelan/icon-big'
    },
    {
        name: 'Xingqiu',
        vision: '/img/Hydro.webp',
        weapon: '/img/Sword.webp',
        gender: 'Male',
        nation: '/img/Liyue.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/xingqiu/icon-big'
    },
    {
        name: 'Razor',
        vision: '/img/Electro.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Male',
        nation: '/img/Mondstadt.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/razor/icon-big'
    },
    {
        name: 'Sethos',
        vision: '/img/Electro.webp',
        weapon: '/img/Bow.webp',
        gender: 'Male',
        nation: '/img/Sumeru.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/sethos/icon-big'
    },
    {
        name: 'Xianyun',
        vision: '/img/Anemo.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Female',
        nation: '/img/Liyue.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/xianyun/icon-big'
    },
    {
        name: 'Yanfei',
        vision: '/img/Pyro.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Female',
        nation: '/img/Liyue.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/yanfei/icon-big'
    },
    {
        name: 'Collei',
        vision: '/img/Dendro.webp',
        weapon: '/img/Bow.webp',
        gender: 'Female',
        nation: '/img/Sumeru.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/collei/icon-big'
    },
    {
        name: 'Candace',
        vision: '/img/Hydro.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Female',
        nation: '/img/Sumeru.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/candace/icon-big'
    },
    {
        name: 'Yaoyao',
        vision: '/img/Dendro.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Female',
        nation: '/img/Liyue.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/yaoyao/icon-big'
    },
    {
        name: 'Venti',
        vision: '/img/Anemo.webp',
        weapon: '/img/Bow.webp',
        gender: 'Male',
        nation: '/img/Mondstadt.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/venti/icon-big'
    },
    {
        name: 'Fischl',
        vision: '/img/Electro.webp',
        weapon: '/img/Bow.webp',
        gender: 'Female',
        nation: '/img/Mondstadt.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/fischl/icon-big'
    },
    {
        name: 'Nahida',
        vision: '/img/Dendro.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Female',
        nation: '/img/Sumeru.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/nahida/icon-big'
    },
    {
        name: 'Diluc',
        vision: '/img/Pyro.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Male',
        nation: '/img/Mondstadt.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/diluc/icon-big'
    },
    {
        name: 'Cyno',
        vision: '/img/Electro.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Male',
        nation: '/img/Sumeru.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/cyno/icon-big'
    },
    {
        name: 'Aloy',
        vision: '/img/Cryo.webp',
        weapon: '/img/Bow.webp',
        gender: 'Female',
        nation: '/img/Another_world.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/aloy/icon-big'
    },
    {
        name: 'Kamisato Ayaka',
        vision: '/img/Cryo.webp',
        weapon: '/img/Sword.webp',
        gender: 'Female',
        nation: '/img/Inazuma.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/ayaka/icon-big'
    },
    {
        name: 'Diona',
        vision: '/img/Cryo.webp',
        weapon: '/img/Bow.webp',
        gender: 'Female',
        nation: '/img/Mondstadt.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/diona/icon-big'
    },
    {
        name: 'Charlotte',
        vision: '/img/Cryo.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Female',
        nation: '/img/Fontaine.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/charlotte/icon-big'
    },
    {
        name: 'Dehya',
        vision: '/img/Pyro.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Female',
        nation: '/img/Sumeru.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/dehya/icon-big'
    },
    {
        name: 'Sayu',
        vision: '/img/Anemo.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Female',
        nation: '/img/Inazuma.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/sayu/icon-big'
    },
    {
        name: 'Kaveh',
        vision: '/img/Dendro.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Male',
        nation: '/img/Sumeru.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/kaveh/icon-big'
    },
    {
        name: 'Arataki Itto',
        vision: '/img/Geo.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Male',
        nation: '/img/Inazuma.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/arataki-itto/icon-big'
    },
    {
        name: 'Lisa',
        vision: '/img/Electro.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Female',
        nation: '/img/Mondstadt.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/lisa/icon-big'
    },
    {
        name: 'Chiori',
        vision: '/img/Geo.webp',
        weapon: '/img/Sword.webp',
        gender: 'Female',
        nation: '/img/Inazuma.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/chiori/icon-big'
    },
    {
        name: 'Shenhe',
        vision: '/img/Cryo.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Female',
        nation: '/img/Liyue.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/shenhe/icon-big'
    },
    {
        name: 'Yoimiya',
        vision: '/img/Pyro.webp',
        weapon: '/img/Bow.webp',
        gender: 'Female',
        nation: '/img/Inazuma.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/yoimiya/icon-big'
    },
    {
        name: 'Neuvillette',
        vision: '/img/Hydro.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Male',
        nation: '/img/Fontaine.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/neuvillette/icon-big'
    },
    {
        name: 'Yae Miko',
        vision: '/img/Electro.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Female',
        nation: '/img/Inazuma.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/yae-miko/icon-big'
    },
    {
        name: 'Xiao',
        vision: '/img/Anemo.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Male',
        nation: '/img/Liyue.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/xiao/icon-big'
    },
    {
        name: 'Wanderer',
        vision: '/img/Anemo.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Male',
        nation: '/img/Sumeru.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/wanderer/icon-big'
    },
    {
        name: 'Kirara',
        vision: '/img/Dendro.webp',
        weapon: '/img/Sword.webp',
        gender: 'Female',
        nation: '/img/Inazuma.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/kirara/icon-big'
    },
    {
        name: 'Lyney',
        vision: '/img/Pyro.webp',
        weapon: '/img/Bow.webp',
        gender: 'Male',
        nation: '/img/Fontaine.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/lyney/icon-big'
    },
    {
        name: 'Klee',
        vision: '/img/Pyro.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Female',
        nation: '/img/Mondstadt.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/klee/icon-big'
    },
    {
        name: 'Tartaglia',
        vision: '/img/Hydro.webp',
        weapon: '/img/Bow.webp',
        gender: 'Male',
        nation: '/img/Snezhnaya.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/tartaglia/icon-big'
    },
    {
        name: 'Xinyan',
        vision: '/img/Pyro.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Female',
        nation: '/img/Liyue.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/xinyan/icon-big'
    },
    {
        name: 'Lynette',
        vision: '/img/Anemo.webp',
        weapon: '/img/Sword.webp',
        gender: 'Female',
        nation: '/img/Fontaine.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/lynette/icon-big'
    },
    {
        name: 'Wriothesley',
        vision: '/img/Cryo.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Male',
        nation: '/img/Fontaine.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/wriothesley/icon-big'
    },
    {
        name: 'Hu Tao',
        vision: '/img/Pyro.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Female',
        nation: '/img/Liyue.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/hu-tao/icon-big'
    },
    {
        name: 'Zhongli',
        vision: '/img/Geo.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Male',
        nation: '/img/Liyue.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/zhongli/icon-big'
    },
    {
        name: 'Yun Jin',
        vision: '/img/Geo.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Female',
        nation: '/img/Liyue.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/yun-jin/icon-big'
    },
    {
        name: 'Baizhu',
        vision: '/img/Dendro.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Male',
        nation: '/img/Liyue.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/baizhu/icon-big'
    },
    {
        name: 'Rosaria',
        vision: '/img/Cryo.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Female',
        nation: '/img/Mondstadt.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/rosaria/icon-big'
    },
    {
        name: 'Arlecchino',
        vision: '/img/Pyro.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Female',
        nation: '/img/Snezhnaya.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/arlecchino/icon-big'
    },
    {
        name: 'Ningguang',
        vision: '/img/Geo.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Female',
        nation: '/img/Liyue.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/ningguang/icon-big'
    },
    {
        name: 'Kujou Sara',
        vision: '/img/Electro.webp',
        weapon: '/img/Bow.webp',
        gender: 'Female',
        nation: '/img/Inazuma.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/sara/icon-big'
    },
    {
        name: 'Furina',
        vision: '/img/Hydro.webp',
        weapon: '/img/Sword.webp',
        gender: 'Female',
        nation: '/img/Fontaine.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/furina/icon-big'
    },
    {
        name: 'Qiqi',
        vision: '/img/Cryo.webp',
        weapon: '/img/Sword.webp',
        gender: 'Female',
        nation: '/img/Liyue.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/qiqi/icon-big'
    },
    {
        name: 'Layla',
        vision: '/img/Cryo.webp',
        weapon: '/img/Sword.webp',
        gender: 'Female',
        nation: '/img/Sumeru.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/layla/icon-big'
    },
    {
        name: 'Kaeya',
        vision: '/img/Cryo.webp',
        weapon: '/img/Sword.webp',
        gender: 'Male',
        nation: '/img/Mondstadt.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/kaeya/icon-big'
    },
    {
        name: 'Mona',
        vision: '/img/Hydro.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Female',
        nation: '/img/Mondstadt.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/mona/icon-big'
    },
    {
        name: 'Noelle',
        vision: '/img/Geo.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Female',
        nation: '/img/Mondstadt.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/noelle/icon-big'
    },
    {
        name: 'Alhaitham',
        vision: '/img/Dendro.webp',
        weapon: '/img/Sword.webp',
        gender: 'Male',
        nation: '/img/Sumeru.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/alhaitham/icon-big'
    },
    {
        name: 'Chevreuse',
        vision: '/img/Pyro.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Female',
        nation: '/img/Fontaine.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/chevreuse/icon-big'
    },
    {
        name: 'Shikanoin Heizou',
        vision: '/img/Anemo.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Male',
        nation: '/img/Inazuma.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/shikanoin-heizou/icon-big'
    },
    {
        name: 'Tighnari',
        vision: '/img/Dendro.webp',
        weapon: '/img/Bow.webp',
        gender: 'Male',
        nation: '/img/Sumeru.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/tighnari/icon-big'
    },
    {
        name: 'Clorinde',
        vision: '/img/Electro.webp',
        weapon: '/img/Sword.webp',
        gender: 'Female',
        nation: '/img/Fontaine.webp',
        rarity: 5,
        image: 'https://genshin.jmp.blue/characters/clorinde/icon-big'
    },
    {
        name: 'Xiangling',
        vision: '/img/Pyro.webp',
        weapon: '/img/Polearm.webp',
        gender: 'Female',
        nation: '/img/Liyue.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/xiangling/icon-big'
    },
    {
        name: 'Kuki Shinobu',
        vision: '/img/Electro.webp',
        weapon: '/img/Sword.webp',
        gender: 'Female',
        nation: '/img/Inazuma.webp',
        rarity: 4,
        image: 'https://genshin.jmp.blue/characters/kuki-shinobu/icon-big'
    },
    {
        name: 'Xilonen',
        vision: '/img/Geo.webp',
        weapon: '/img/Sword.webp',
        gender: 'Female',
        nation: '/img/Natlan.webp',
        rarity: 5,
        image: 'https://keqingmains.com/wp-content/uploads/2024/02/xilonen_103_icon.webp'
    },
    {
        name: 'Chasca',
        vision: '/img/Anemo.webp',
        weapon: '/img/Bow.webp',
        gender: 'Female',
        nation: '/img/Natlan.webp',
        rarity: 5,
        image: 'https://keqingmains.com/wp-content/uploads/2024/11/Chasca_Icon.webp'
    },
    {
        name: 'Mavuika',
        vision: '/img/Pyro.webp',
        weapon: '/img/Claymore.webp',
        gender: 'Female',
        nation: '/img/Natlan.webp',
        rarity: 5,
        image: 'https://keqingmains.com/wp-content/uploads/2025/01/Mavuika_Icon.webp'
    },
    {
        name: 'Citlali',
        vision: '/img/Cryo.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Female',
        nation: '/img/Natlan.webp',
        rarity: 5,
        image: 'https://keqingmains.com/wp-content/uploads/2025/01/Citlali_Icon.webp'
    },
    {
        name: 'Ororon',
        vision: '/img/Electro.webp',
        weapon: '/img/Bow.webp',
        gender: 'Male',
        nation: '/img/Natlan.webp',
        rarity: 4,
        image: 'https://keqingmains.com/wp-content/uploads/2024/11/Ororon_Icon.webp'
    },
    {
        name: 'Lan Yan',
        vision: '/img/Anemo.webp',
        weapon: '/img/Catalyst.webp',
        gender: 'Female',
        nation: '/img/Liyue.webp',
        rarity: 4,
        image: 'https://keqingmains.com/wp-content/uploads/2025/01/UI_AvatarIcon_Lanyan.webp'
    },
];

export default initialCharacters;
