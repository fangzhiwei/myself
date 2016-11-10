/**
 * Created by hxsd on 2016/9/30.
 */

angular.module("myapp").controller("introduceCtrl",function($scope,$ionicPopup,$ionicModal){

    $scope.intro = [
        {
            "name":"Rida",
            "qianming":"与你一起看遍世界每一个角落",
            "headerimgsrc":"images/01.jpg","imgsrc":"images/shuizhenzhu.jpg",
            "introduce":"凤凰古城是一座国家历史文化名城，它位于沱江之畔，群山环抱，曾被新西兰著名作家路易·艾黎称赞为中国最美丽的小城。" +
            "2001年12月17日，凤凰被国务院列为中国历史文化名城。古城风景秀丽、历史悠久、名胜古迹甚多。城内石板小街，古代城楼，明清古院；" +
            "城外沱江蜿蜒，河水凤凰城清冽，浆声舟影，山歌互答，好一派宁静安祥的小城风光。地因人传，人杰而地灵。文学巨匠沈从文一曲《边城》，" +
            "将他魂梦牵涉系的故土描绘得如诗如画，如梦如歌，荡气回肠，也将这座静默深沉的小城推向了全世界。",
            "zan":4816,
            "cai":5,
            "pinglun":2500
        },
        {
            "name":"泡小沫",
            "qianming":"阳光下的泡沫，是彩色的",
            "headerimgsrc":"images/01.jpg","imgsrc":"images/fenghaungguzhen.jpg",
            "introduce":"奥地利“水珍珠”：绿湖水下公园。萨尔茨卡默古特地区位于奥地利萨尔茨堡州、上奥地利州和施泰尔马克州的交界处，" +
            "这里山峦重叠，湖泊星罗棋布，优美的自然风景吸引了无数艺术家和文人墨客，如今，这里清新的空气、清澈见底的湖水、以及名胜古迹和完善的运动设施，" +
            "构成了人们理想的度假胜地。在萨尔茨卡默古特湖区，有一个令人惊讶的地方——绿湖，它被公认为奥地利的水珍珠。绿湖公园只有冬天才会出现，这里有舒适的长椅、" +
            "茂盛的树木，但是在夏天，这个公园会被水体淹没，要是想一探究竟，必须潜入水中。",
            "zan":116,
            "cai":5,
            "pinglun":20
        },
        {
            "name":"偶尔不同",
            "qianming":"你说什么我没听见",
            "headerimgsrc":"images/01.jpg","imgsrc":"images/caihongqiao.jpg",
            "introduce":"四川达县，明代建的“彩虹桥”，世界上最美的桥之一",
            "zan":4816,
            "cai":5,
            "pinglun":2500
        },

        {
            "name":"苏白衣",
            "qianming":"人生指南，我却一路向西",
            "headerimgsrc":"images/01.jpg","imgsrc":"images/shangliguzhen.jpg",
            "introduce":"上里古镇——上里镇位于雅安市雨城区北部是四川历史文化名镇。" +
            "古镇初名“罗绳”，是历史上南方丝绸之路临邛古道进入雅安的重要驿站，是唐蕃古道上的重要边茶关隘和茶马司所在地。古有诗云:“二水夹明镜，" +
            "双桥落彩虹”,正是对上里古镇生动形象的总体描绘。古镇建在二水环绕，面向田野小丘，与四周古主、修竹、溪水、古桥相映成趣。" +
            "镇上古朴的建筑高低错落，风格各异，石板铺街，木屋为舍。街市以主要是“井”字布局，取“井中有水”防止火患之意。居高俯览，" +
            "宛如观赏一幅古老的画卷；身临其间，有又一种时光倒流回到从前的感觉……",
            "zan":121,
            "cai":12,
            "pinglun":23
        },
        {
            "name":"十指苔生",
            "qianming":"十年听雪楼，一朝忘川",
            "headerimgsrc":"images/01.jpg","imgsrc":"images/shaoxing.jpg",
            "introduce":"绍兴，是我很喜欢的城市！喜欢的原因，其实，不在于风景，也不在于美食，而是绍兴的慢，以及平静中的微微躁动。" +
            "这种感受，行色匆匆的游人，很难感悟到的！绍兴是古城，但却从没丢失过底蕴。这个城市，得益于小，地下水源多，文化古迹也多，所以在这场推倒一切盖高楼大厦中，" +
            "稍微得以幸免。同样作为旅游城市，但绍兴的商业气息，明显不那么的浓厚，能让人感觉到人情味，安逸。黄酒，越剧，小桥，流水，乌篷船..." +
            "那些老街的日常生活，带着浓浓的文化味道，而生活也是慢条斯理......",
            "zan":115,
            "cai":0,
            "pinglun":48
        },
        {
            "name":"AncientDeep",
            "qianming":"遇见更好的自己",
            "headerimgsrc":"images/01.jpg","imgsrc":"images/lundun.jpg",
            "introduce":"伦敦旅行可说是十分便利，一张地铁券便可跑遍全城，游览城内的风景名胜，你可以参观具有文化气息的博物馆、塔桥、古迹与王宫，" +
            "累了可随处找个公园小憩一下，或是喝个悠闲的英式下午茶，到了夜晚，不管是音乐歌舞秀、各式剧码、音乐会、酒馆或是夜总会，都能让你沉迷。",
            "zan":11,
            "cai":0,
            "pinglun":3
        }
    ];


    //弹出提醒赞过信息
    $scope.zanguo = function () {
        $ionicPopup.alert({
            title: '提示',
            template: '您已经赞过了',
            buttons: [{text:"确定"}]
        }).then(function (res) {
            console.log('哈哈');
        });
    };

    //弹出提醒赞过信息
    $scope.caiguo = function () {
        $ionicPopup.alert({
            title: '提示',
            template: '您已经踩过了',
            buttons: [{text:"确定"}]
        }).then(function (res) {
            console.log('哈哈');
        });
    };


    //赞和踩
    $scope.start1=0;
    $scope.start2=0;
    $scope.zan = function(item){
        if(item.zan-$scope.start1==1){
            item.zan=$scope.start1+1;
            $scope.zanguo();
        }else {
            $scope.start1=item.zan;
            item.zan++;
        }
    };
    $scope.cai = function(item){
        if(item.cai-$scope.start2==1){
            item.cai=$scope.start2+1;
            $scope.caiguo();
        }else {
            $scope.start2=item.cai;
            item.cai++;
        }
    };



});
