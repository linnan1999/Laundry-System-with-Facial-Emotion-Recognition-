// pages/wash/wash.js
var util = require('../../utils/util');

var app = getApp();
var orders = app.globalData.orders

Page({
  data: {
    showView: false,
    menus: [
      {Name:"学勤",Sort:1,Status:1,Id : "00-1",ParentId:"00-0"},
      {Name:"思廷",Sort:2,Status:1,Id : "00-2",ParentId:"00-0"},
      {Name:"逸夫",Sort:3,Status:1,Id : "00-3",ParentId:"00-0"},
      {Name:"祥波",Sort:4,Status:1,Id : "00-4",ParentId:"00-0"}
    ],
    blocks:[
      [{Name:"A",ParentId:"00-1",Id:"00-1-A"},{Name:"B",ParentId:"00-1",Id:"00-1-B"},{Name:"C",ParentId:"00-1",Id:"00-1-C"}],
      [{Name:"A",ParentId:"00-2",Id:"00-2-A"},{Name:"B",ParentId:"00-2",Id:"00-2-B"},{Name:"C",ParentId:"00-2",Id:"00-2-C"}],
      [{Name:"A",ParentId:"00-3",Id:"00-3-A"},{Name:"B",ParentId:"00-3",Id:"00-3-B"},{Name:"C",ParentId:"00-3",Id:"00-3-C"},{Name:"D",ParentId:"00-3",Id:"00-3-D"},{Name:"E",ParentId:"00-3",Id:"00-3-E"}],
    ],
    clothesAll: [
      [[{Id: "xq-w-01", ImgUrl: "../../images/wm.png", Name: "洗衣机-A-0001",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 1,Status: 1},
      {Id: "xq-w-02",ImgUrl: "../../images/wm.png",Name: "洗衣机-A-0002",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 2,Status: 1},
      {Id: "xq-w-03",ImgUrl: "../../images/wm.png",Name: "洗衣机-A-0003",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 3,Status: 1},
      {Id: "xq-d-01",ImgUrl: "../../images/dryer2.png",Name: "烘干机-A-0001",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 4,Status: 1},
      {Id: "xq-d-02",ImgUrl: "../../images/dryer2.png",Name: "烘干机-A-0002",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1, Sort: 5, Status: 1},
      ],
      [{Id: "xq-w-04", ImgUrl: "../../images/wm.png", Name: "洗衣机-B-0104",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 1,Status: 1},
      {Id: "xq-w-05",ImgUrl: "../../images/wm.png",Name: "洗衣机-B-0105",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 2,Status: 1},
      {Id: "xq-w-06",ImgUrl: "../../images/wm.png",Name: "洗衣机-B-0106",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 3,Status: 1},
      {Id: "xq-d-03",ImgUrl: "../../images/dryer2.png",Name: "烘干机-B-0103",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 4,Status: 1},
      {Id: "xq-d-04",ImgUrl: "../../images/dryer2.png",Name: "烘干机-B-0104",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1, Sort: 5, Status: 1},
      ],
      [{Id: "xq-w-07", ImgUrl: "../../images/wm.png", Name: "洗衣机-C-1007",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 1,Status: 1},
      {Id: "xq-w-08",ImgUrl: "../../images/wm.png",Name: "洗衣机-C-1008",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 2,Status: 1},
      {Id: "xq-w-09",ImgUrl: "../../images/wm.png",Name: "洗衣机-C-1009",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 3,Status: 1},
      {Id: "xq-d-05",ImgUrl: "../../images/dryer2.png",Name: "烘干机-C-1005",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 4,Status: 1},
      {Id: "xq-d-06",ImgUrl: "../../images/dryer2.png",Name: "烘干机-C-1006",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1, Sort: 5, Status: 1},
      ],

    ],
     [ [{Id: "st-w-11", ImgUrl: "../../images/wm.png", Name: "洗衣机-A-0011",Number: 0,ParentId: "00-2",ParentName: "思廷",Price: 1,Sort: 1,Status: 1},
      {Id: "st-w-12",ImgUrl: "../../images/wm.png",Name: "洗衣机-A-0012",Number: 0,ParentId: "00-2",ParentName: "思廷",Price: 1,Sort: 2,Status: 1},
      {Id: "st-w-13",ImgUrl: "../../images/wm.png",Name: "洗衣机-A-0013",Number: 0,ParentId: "00-2",ParentName: "思廷",Price: 1,Sort: 3,Status: 1},
      {Id: "st-d-11",ImgUrl: "../../images/dryer2.png",Name: "烘干机-A-0011",Number: 0,ParentId: "00-2",ParentName: "思廷",Price: 1,Sort: 4,Status: 1},
      {Id: "st-d-12",ImgUrl: "../../images/dryer2.png",Name: "烘干机-A-0012",Number: 0,ParentId: "00-2",ParentName: "思廷",Price: 1, Sort: 5, Status: 1},
      ],
      [{Id: "st-w-14", ImgUrl: "../../images/wm.png", Name: "洗衣机-B-1114",Number: 0,ParentId: "00-2",ParentName: "思廷",Price: 1,Sort: 1,Status: 1},
      {Id: "st-w-15",ImgUrl: "../../images/wm.png",Name: "洗衣机-B-1115",Number: 0,ParentId: "00-2",ParentName: "思廷",Price: 1,Sort: 2,Status: 1},
      {Id: "st-w-16",ImgUrl: "../../images/wm.png",Name: "洗衣机-B-1116",Number: 0,ParentId: "00-2",ParentName: "思廷",Price: 1,Sort: 3,Status: 1},
      {Id: "st-d-13",ImgUrl: "../../images/dryer2.png",Name: "烘干机-B-1113",Number: 0,ParentId: "00-2",ParentName: "思廷",Price: 1,Sort: 4,Status: 1},
      {Id: "st-d-17",ImgUrl: "../../images/dryer2.png",Name: "烘干机-B-1114",Number: 0,ParentId: "00-2",ParentName: "思廷",Price: 1, Sort: 5, Status: 1},
      ],
      [{Id: "st-w-11", ImgUrl: "../../images/wm.png", Name: "洗衣机-C-1121",Number: 0,ParentId: "00-2",ParentName: "思廷",Price: 1,Sort: 1,Status: 1},
      {Id: "st-w-12",ImgUrl: "../../images/wm.png",Name: "洗衣机-C-1122",Number: 0,ParentId: "00-2",ParentName: "思廷",Price: 1,Sort: 2,Status: 1},
      {Id: "st-w-13",ImgUrl: "../../images/wm.png",Name: "洗衣机-C-1123",Number: 0,ParentId: "00-2",ParentName: "思廷",Price: 1,Sort: 3,Status: 1},
      {Id: "st-d-11",ImgUrl: "../../images/dryer2.png",Name: "烘干机-C-1114",Number: 0,ParentId: "00-2",ParentName: "思廷",Price: 1,Sort: 4,Status: 1},
      {Id: "st-d-12",ImgUrl: "../../images/dryer2.png",Name: "烘干机-C-1115",Number: 0,ParentId: "00-2",ParentName: "思廷",Price: 1, Sort: 5, Status: 1},
      ],
    ],
    [
      [{Id: "yf-w-01",ImgUrl: "../../images/wm.png",Name: "洗衣机-A-2101",Number: 0, ParentId: "00-3", ParentName: "逸夫", Price: 1, Sort: 1,Status: 1},
      {Id: "yf-w-02",ImgUrl: "../../images/wm.png",Name: "洗衣机-A-2102",Number: 0, ParentId: "00-3", ParentName: "逸夫", Price: 1, Sort: 2,Status: 1},
      {Id: "yf-w-01",ImgUrl: "../../images/wm.png",Name: "洗衣机-A-2103",Number: 0, ParentId: "00-3", ParentName: "逸夫", Price: 1, Sort: 3,Status: 1},
      {Id: "yf-d-01",ImgUrl: "../../images/dryer2.png",Name: "洗衣机-A-2111",Number: 0, ParentId: "00-3", ParentName: "逸夫", Price: 1, Sort: 4,Status: 1},
      {Id: "yf-d-02",ImgUrl: "../../images/dryer2.png",Name: "烘干机-A-2112", Number: 0, ParentId: "00-3", ParentName: "逸夫", Price: 1,Sort: 5, Status: 1}
      ],
      [{Id: "yf-w-04",ImgUrl: "../../images/wm.png",Name: "洗衣机-B-2104",Number: 0, ParentId: "00-3", ParentName: "逸夫", Price: 1, Sort: 1,Status: 1},
      {Id: "yf-w-05",ImgUrl: "../../images/wm.png",Name: "洗衣机-B-2105",Number: 0, ParentId: "00-3", ParentName: "逸夫", Price: 1, Sort: 2,Status: 1},
      {Id: "yf-w-06",ImgUrl: "../../images/wm.png",Name: "洗衣机-B-2106",Number: 0, ParentId: "00-3", ParentName: "逸夫", Price: 1, Sort: 3,Status: 1},
      {Id: "yf-d-03",ImgUrl: "../../images/dryer2.png",Name: "洗衣机-B-2113",Number: 0, ParentId: "00-3", ParentName: "逸夫", Price: 1, Sort: 4,Status: 1},
      {Id: "yf-d-04",ImgUrl: "../../images/dryer2.png",Name: "烘干机-B-2114", Number: 0, ParentId: "00-3", ParentName: "逸夫", Price: 1,Sort: 5, Status: 1}
      ],
      [{Id: "yf-w-07",ImgUrl: "../../images/wm.png",Name: "洗衣机-C-2107",Number: 0, ParentId: "00-3", ParentName: "逸夫", Price: 1, Sort: 1,Status: 1},
      {Id: "yf-w-08",ImgUrl: "../../images/wm.png",Name: "洗衣机-C-2108",Number: 0, ParentId: "00-3", ParentName: "逸夫", Price: 1, Sort: 2,Status: 1},
      {Id: "yf-w-09",ImgUrl: "../../images/wm.png",Name: "洗衣机-C-2109",Number: 0, ParentId: "00-3", ParentName: "逸夫", Price: 1, Sort: 3,Status: 1},
      {Id: "yf-d-05",ImgUrl: "../../images/dryer2.png",Name: "洗衣机-C-2115",Number: 0, ParentId: "00-3", ParentName: "逸夫", Price: 1, Sort: 4,Status: 1},
      {Id: "yf-d-06",ImgUrl: "../../images/dryer2.png",Name: "烘干机-C-2116", Number: 0, ParentId: "00-3", ParentName: "逸夫", Price: 1,Sort: 5, Status: 1}
      ],
    ],
    [
      [{Id: "xb-w-01",ImgUrl: "../../images/wm.png",Name: "洗衣机-A-3101",Number: 0, ParentId: "00-3", ParentName: "祥波", Price: 1, Sort: 1,Status: 1},
      {Id: "xb-w-02",ImgUrl: "../../images/wm.png",Name: "洗衣机-A-3102",Number: 0, ParentId: "00-3", ParentName: "祥波", Price: 1, Sort: 2,Status: 1},
      {Id: "xb-w-01",ImgUrl: "../../images/wm.png",Name: "洗衣机-A-3103",Number: 0, ParentId: "00-3", ParentName: "祥波", Price: 1, Sort: 3,Status: 1},
      {Id: "xb-d-01",ImgUrl: "../../images/dryer2.png",Name: "洗衣机-A-3111",Number: 0, ParentId: "00-3", ParentName: "祥波", Price: 1, Sort: 4,Status: 1},
      {Id: "xb-d-02",ImgUrl: "../../images/dryer2.png",Name: "烘干机-A-3112", Number: 0, ParentId: "00-3", ParentName: "祥波", Price: 1,Sort: 5, Status: 1}
      ],
      [{Id: "xb-w-04",ImgUrl: "../../images/wm.png",Name: "洗衣机-B-3104",Number: 0, ParentId: "00-3", ParentName: "祥波", Price: 1, Sort: 1,Status: 1},
      {Id: "xb-w-05",ImgUrl: "../../images/wm.png",Name: "洗衣机-B-3105",Number: 0, ParentId: "00-3", ParentName: "祥波", Price: 1, Sort: 2,Status: 1},
      {Id: "xb-w-06",ImgUrl: "../../images/wm.png",Name: "洗衣机-B-3106",Number: 0, ParentId: "00-3", ParentName: "祥波", Price: 1, Sort: 3,Status: 1},
      {Id: "xb-d-03",ImgUrl: "../../images/dryer2.png",Name: "洗衣机-B-3113",Number: 0, ParentId: "00-3", ParentName: "祥波", Price: 1, Sort: 4,Status: 1},
      {Id: "xb-d-04",ImgUrl: "../../images/dryer2.png",Name: "烘干机-B-3114", Number: 0, ParentId: "00-3", ParentName: "祥波", Price: 1,Sort: 5, Status: 1}
      ],
      [{Id: "xb-w-07",ImgUrl: "../../images/wm.png",Name: "洗衣机-C-3107",Number: 0, ParentId: "00-3", ParentName: "祥波", Price: 1, Sort: 1,Status: 1},
      {Id: "xb-w-08",ImgUrl: "../../images/wm.png",Name: "洗衣机-C-3108",Number: 0, ParentId: "00-3", ParentName: "祥波", Price: 1, Sort: 2,Status: 1},
      {Id: "xb-w-09",ImgUrl: "../../images/wm.png",Name: "洗衣机-C-3109",Number: 0, ParentId: "00-3", ParentName: "祥波", Price: 1, Sort: 3,Status: 1},
      {Id: "xb-d-05",ImgUrl: "../../images/dryer2.png",Name: "洗衣机-C-3115",Number: 0, ParentId: "00-3", ParentName: "祥波", Price: 1, Sort: 4,Status: 1},
      {Id: "xb-d-06",ImgUrl: "../../images/dryer2.png",Name: "烘干机-C-3116", Number: 0, ParentId: "00-3", ParentName: "祥波", Price: 1,Sort: 5, Status: 1}
      ],
    ],
  ],
  clothesList: [{Id: "xq-w-01", ImgUrl: "../../images/wm.png", Name: "洗衣机-A-0001",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 1,Status: 1},
  {Id: "xq-w-02",ImgUrl: "../../images/wm.png",Name: "洗衣机-A-0002",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 2,Status: 1},
  {Id: "xq-w-03",ImgUrl: "../../images/wm.png",Name: "洗衣机-A-0003",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 3,Status: 1},
  {Id: "xq-d-01",ImgUrl: "../../images/dryer2.png",Name: "烘干机-A-0001",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1,Sort: 4,Status: 1},
  {Id: "xq-d-02",ImgUrl: "../../images/dryer2.png",Name: "烘干机-A-0002",Number: 0,ParentId: "00-1",ParentName: "学勤",Price: 1, Sort: 5, Status: 1},
  ],
  
    clothesAllIndex: 0,
    checkedList: [],
    changeList: [],
    noMenu: '',
    menuItme: 0,
    Authorization: '',
    ids: ["00-1","00-2","00-3","00-4"],
    totalNum: 0,
    totalPrice: 0,
    oldId: null
  },
  onLoad: function (options) {
  //   checkedList.forEach(value=> {
  //     value.Id = value.ClothesId;
  //     value.Name = value.ClotherName;
  //     value.Price = value.ClothesPrice
  // })
  // console.log("checkedslist",res.data.Data.Clotheslist)
  // that.setData({
  //   changeList: res.data.Data.Clotheslist,
  //   checkedList: checkedList,
  //   totalNum: checkedList.length,
  //   totalPrice: res.data.Data.TotalPrice
  // })
   
  },
  toggleList: function () {
    var that = this;
    if(!this.data.totalNum) {return;}
    that.setData({
      showView: (!that.data.showView)
    })
  },
  menuTap: function (event) {
    const index = event.currentTarget.dataset.index;
    console.log("index",index)
    const that = this;
    this.setData({
      menuItme: index
    });
    const id = this.data.menus[index].Id;
    const ids = this.data.ids;
    const clothesAll = this.data.clothesAll;
    console.log("ids",ids,"id",id,"clothesall",clothesAll,"indexof",ids.indexOf(id))
    const clothesList = this.data.clothesAll[index];
    if (ids.indexOf(id) > -1) {
      this.setData({
        clothesList: clothesAll[ids.indexOf(id)][0],
        clothesAllIndex: ids.indexOf(id)
      });
      wx.hideLoading();
      return;
    } else {
      ids.push(id);
      this.setData({
        ids: ids
      });
      }
  },

  blockTap: function (event) {
    const index = event.currentTarget.dataset.index;
    console.log("blockindex",index,"datset",this.data)
    const that = this;
    this.setData({
      blockItem: index
    });
    const page = this.data.menuItme;
    const id = this.data.blocks[page][index].Id;
    const ids = this.data.ids;
    const clothesAll = this.data.clothesAll;
    const clothesList = this.data.clothesAll[page][index];
    console.log("page",page,"id",id,"COTHELIST",clothesList,"indexof",ids.indexOf(id))
    this.setData({
        clothesList:this.data.clothesAll[page][index]
    })
  },

  // 单件减 
  minusCartCount: function (event) {
    const index = event.currentTarget.dataset.index;
    const clothes = this.data.clothesList;
    const clothesAll = this.data.clothesAll;
    const clothesAllIndex = this.data.clothesAllIndex;
    let checkedList = this.data.checkedList;
    let totalNum = this.data.totalNum;
    let totalPrice = this.data.totalPrice;
    if (clothes[index].Number > 0) {
      clothes[index].Number -= 1;
      const minusId = clothes[index].Id;
      const thisCount = clothes[index].Number;
      for (let i = 0; i < checkedList.length; i++) {
        if (checkedList[i].Id === minusId && thisCount === 0) {
          checkedList.splice(i, 1);
        } else if(checkedList[i].Id === minusId && thisCount !== 0) {
          checkedList[i] = clothes[index];
        }
      }
      totalPrice = 0;
      checkedList.forEach(value => {
        totalPrice += value.Number*value.Price;
      });
      clothesAll[clothesAllIndex] = clothes;
      if (totalNum > 0) {
        totalNum -= 1;
      }
      this.setData({
        clothesList: clothes,
        clothesAll: clothesAll,
        totalNum: totalNum,
        checkedList: checkedList,
        totalPrice: totalPrice
      });
    }
    return;
  },
  // 单件加
  addCartCount: function (event) {
    const index = event.currentTarget.dataset.index;
    const clothes = this.data.clothesList;
    const clothesAll = this.data.clothesAll;
    const clothesAllIndex = this.data.clothesAllIndex;
    let checkedList = this.data.checkedList;
    let totalNum = this.data.totalNum;
    let totalPrice = this.data.totalPrice;
    const minusId = clothes[index].Id;
    let a = false;
    let listIndex = -1;

    clothes[index].Number += 1;
   
    if(checkedList.length) {
      for (let i = 0; i < checkedList.length; i++) {
        if ( checkedList[i].Id === minusId) {
          listIndex = i;
          a = true;
          break;
        }
      }
    }
    if(a) {
      checkedList[listIndex] = clothes[index];
    } else {
      checkedList.push(clothes[index]);
    }
    totalPrice = 0;
    checkedList.forEach(value => {
      totalPrice += value.Number*value.Price;
    });
    totalNum += 1;
    clothesAll[clothesAllIndex] = clothes;
    this.setData({
      clothesList: clothes,
      clothesAll: clothesAll,
      totalNum: totalNum,
      checkedList: checkedList,
      totalPrice: totalPrice
    });
    return;
  },

  // 订单减
  cartMinus: function(event) {
    const index = event.currentTarget.dataset.index;
    const checkedList = this.data.checkedList;
    let totalPrice = this.data.totalPrice;
    const minusId = checkedList[index].Id;
    const clothesList = this.data.clothesList;
    const clothesAll = this.data.clothesAll;
    let totalNum = this.data.totalNum;
    if (checkedList[index].Number > 1) {
      checkedList[index].Number -= 1;
    } else {
      checkedList.splice(index, 1);
    }
    for (let i = 0; i < clothesList.length; i++) {
      if (clothesList[i].Id === minusId) {
        clothesList[i].Number -= 1;
      }
    }
    for (let a = 0; a < clothesAll.length; a++) {
      for(let b =0; b < clothesAll[a].length; b++) {
        if(clothesAll[a][b].Id === minusId) {
          clothesAll[a][b].Number -= 1;
        }
      }
    }
    totalPrice = 0;
    checkedList.forEach(value => {
      totalPrice += value.Number*value.Price;
    });
    totalNum -= 1;
    if(totalNum === 0) {
      this.setData({
        showView: false
      })
    }
    this.setData({
      totalPrice: totalPrice,
      checkedList: checkedList,
      clothesAll: clothesAll,
      clothesList: clothesList,
      totalNum: totalNum
    })
  },
  // 订单加
  cartAdd: function(event) {
    const index = event.currentTarget.dataset.index;
    const checkedList = this.data.checkedList;
    let totalPrice = this.data.totalPrice;
    const minusId = checkedList[index].Id;
    const clothesList = this.data.clothesList;
    const clothesAll = this.data.clothesAll;
    let totalNum = this.data.totalNum;
    checkedList[index].Number += 1;
    for (let i = 0; i < clothesList.length; i++) {
      if (clothesList[i].Id === minusId) {
        clothesList[i].Number += 1;
      }
    }
    for (let a = 0; a < clothesAll.length; a++) {
      for(let b =0; b < clothesAll[a].length; b++) {
        if(clothesAll[a][b].Id === minusId) {
          clothesAll[a][b].Number += 1;
        }
      }
    }
    totalPrice = 0;
    checkedList.forEach(value => {
      totalPrice += value.Number*value.Price;
    });
    totalNum += 1;
    this.setData({
      totalPrice: totalPrice,
      checkedList: checkedList,
      clothesAll: clothesAll,
      clothesList: clothesList,
      totalNum: totalNum
    })
  },
  // 清空
  empty: function() {
    const clothesList = this.data.clothesList;
    const clothesAll = this.data.clothesAll;
    for (let i = 0; i < clothesList.length; i++) {
      clothesList[i].Number = 0;
    }
    for (let a = 0; a < clothesAll.length; a++) {
      for(let b =0; b < clothesAll[a].length; b++) {
        clothesAll[a][b].Number = 0;
      }
    }
    this.setData({
      checkedList: [],
      totalNum: 0,
      totalPrice: 0,
      clothesList: clothesList,
      clothesAll: clothesAll,
      showView: false
    });
  },
  pay: function(){
    if(this.data.totalPrice > 0){
      var date = new Date();
      var time = util.formatTime(date).toString();
      //计算结束时间
      date.setMinutes(date.getMinutes() + this.data.totalPrice * 10);
      var endtime = util.formatTime(date).toString();
      orders.push({
        name: this.data.checkedList[0].Name,
        orderTime: time,
        endTime: endtime,
        money: this.data.totalPrice
      });
      this.empty();
      wx.switchTab({
        url: '../order/order',
      });
    }
  }
})