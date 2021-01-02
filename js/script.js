var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};

var watchList = function() {
  elWatchLater.innerHTML = ``;
  var watchLaterFragment = document.createDocumentFragment();
  watchLater.forEach(function (watch, watchIndex) {
    var watchLaterItem = elRecommendedTemplate.cloneNode(true);

    $_('.recommended__link-img', watchLaterItem).src = watch.recommendedImg;
    $_('.recommended__link-img', watchLaterItem).srcset = watch.recommendedImg2x;
    $_('.recommended__link-time', watchLaterItem).textContent = watch.recommendedTime;
    $_('.recommended__link-title', watchLaterItem).textContent = watch.recommendedTitle;
    $_('.recommended__link-days-ago', watchLaterItem).textContent = watch.recommendedDaysAgo;
    $_('.recommended__link-person', watchLaterItem).textContent = watch.recommendedPerson;
    $_('.recommended__link-clock', watchLaterItem).dataset.watchId = watchIndex;

    watchLaterFragment.appendChild(watchLaterItem);
  });
  elWatchLater.appendChild(watchLaterFragment);
};

var watchList = function() {
  elWatchLater.innerHTML = ``;
  var watchLaterFragment = document.createDocumentFragment();
  watchLater.forEach(function (topwatch, topwatchIndex) {
    var ChannelTopItem = elChannelTopTemplate.cloneNode(true);

    $_('.channel-top__img', ChannelTopItem).src = `${topwatch.ChannelTopImg}`;
    $_('.channel-top__img', ChannelTopItem).srcset = `${topwatch.ChannelTopImg2x}`;
    $_('.channel-top__item-title', ChannelTopItem).textContent = topwatch.ChannelTopTitle;
    $_('.channel-top__item-days-ago',ChannelTopItem).textContent = topwatch.ChannelTopDaysAgo;
    $_('.channel-top__item-person', ChannelTopItem).textContent = topwatch.ChannelTopPerson;
    $_('.channel-top__item-time', ChannelTopItem).textContent = topwatch.ChannelTopTime;
    $_('.channel-top__item-clock', ChannelTopItem).dataset.TopId = topwatchIndex;

    watchLaterFragment.appendChild(ChannelTopItem);
  });
  elWatchLater.appendChild(watchLaterFragment);
};

var watchList = function() {
  elWatchLater.innerHTML = ``;
  var watchLaterFragment = document.createDocumentFragment();
  watchLater.forEach(function (bottomwatch, bottomwatchIndex) {
    var elChannelBottomItem = elChannelBottomTemplate.cloneNode(true);

    $_('.channel-bottom__link-img', elChannelBottomItem).src = `${bottomwatch.ChannelBottomImg}`;
    $_('.channel-bottom__link-img', elChannelBottomItem).srcset = `${bottomwatch.ChannelBottomImg2X}`;
    $_('.channel-bottom__link-title', elChannelBottomItem).textContent = bottomwatch.ChannelBottomTitle;
    $_('.channel-bottom__days-ago', elChannelBottomItem).textContent = bottomwatch.ChannelBottomDaysAgo;
    $_('.channel-bottom__channel', elChannelBottomItem).textContent = bottomwatch.ChannelBottomPerson;
    $_('.channel-bottom__link-time', elChannelBottomItem).textContent = bottomwatch.ChannelBottomTime;
    $_('.channel-bottom__link-clock', elChannelBottomItem).dataset.BottomId = bottomwatchIndex;

    watchLaterFragment.appendChild(elChannelBottomItem);
  });
  elWatchLater.appendChild(watchLaterFragment);
};


var watchLater = [];


var elWatchLater = $_('.watch-later__list');
var elChannelTopList = $_('.channel-top__list');
var elRecommended = $_('.recommended__list');
var elChannelBottomList = $_('.channel-bottom__list');

//MENU-BUTTON
var elMenuButton = document.querySelector(`.site-header__button`);
var elMenu = document.querySelector(`.menu-section`);

elMenuButton.addEventListener(`click`, function () {
  elMenu.classList.toggle(`site-menu--none`)
});

//CHANNEL-TOP

var ChannelTop = [
  {
    ChannelTopImg: './imgs/video-img-1.png',
    ChannelTopImg2x: 'imgs/video-img-1.png 1x, imgs/video-img-1@2x.png 2x',
    ChannelTopTitle: 'A Brief History Of Creation',
    ChannelTopDaysAgo: '80k views  ·  3 days ago',
    ChannelTopPerson: 'Dollie Blair',
    ChannelTopTime: '4:15',
    ChannelTopId: 't1'
  },
  {
    ChannelTopImg: './imgs/video-img-2.png',
    ChannelTopImg2x: 'imgs/video-img-2.png 1x, imgs/video-img-2@2x.png 2x',
    ChannelTopTitle: 'Selecting The Right Hotel',
    ChannelTopDaysAgo: '123k views  ·  1 months ago',
    ChannelTopPerson: 'Dollie Blair',
    ChannelTopTime: '8:00',
    ChannelTopId: 't2'
  },
  {
    ChannelTopImg: './imgs/video-img-3.png',
    ChannelTopImg2x: 'imgs/video-img-3.png 1x, imgs/video-img-3@2x.png 2x',
    ChannelTopTitle: 'Asteroids',
    ChannelTopDaysAgo: '43k views  ·  12 days ago',
    person: 'Dollie Blair',
    ChannelTopTime: '5:32',
    ChannelTopId: 't3'
  },
  {
    ChannelTopImg: './imgs/video-img-4.png',
    ChannelTopImg2x: 'imgs/video-img-4.png 1x, imgs/video-img-4@2x.png 2x',
    ChannelTopTitle: 'Telescopes 101',
    ChannelTopDaysAgo: '11k views  ·  6 months ago',
    ChannelTopPerson: 'Dollie Blair',
    ChannelTopTime: '6:40',
    ChannelTopId: 't4'
  },
  {
    ChannelTopImg: './imgs/video-img-5.png',
    ChannelTopImg2x: 'imgs/video-img-5.png 1x, imgs/video-img-5@2x.png 2x',
    ChannelTopTitle: 'Medical Care Is Just',
    ChannelTopDaysAgo: '18k views  ·  2 days ago',
    ChannelTopPerson: 'Dollie Blair',
    ChannelTopTime: '1:45',
    ChannelTopId: 't5'
  },
  {
    ChannelTopImg: './imgs/Cover.png',
    ChannelTopImg2x: 'imgs/Cover.png 1x, imgs/Cover@2x.png 2x',
    ChannelTopTitle: 'Moon Gazing',
    ChannelTopDaysAgo: '67k views  ·  4 months ago',
    ChannelTopPerson: 'Dollie Blair',
    ChannelTopTime: '2:12',
    ChannelTopId: 't6'
  }
]

var elChannelTopTemplate = $_('.channel-top__template').content;

var elChannelTopFragment = document.createDocumentFragment();
ChannelTop.forEach(function (ChannelTopObj, ChannelTopIndex){
  var elChannelTopItem = elChannelTopTemplate.cloneNode(true);

  $_('.channel-top__img', elChannelTopItem).src = `${ChannelTopObj.ChannelTopImg}`;
  $_('.channel-top__img', elChannelTopItem).srcset = `${ChannelTopObj.ChannelTopImg2x}`;
  $_('.channel-top__item-title', elChannelTopItem).textContent = ChannelTopObj.ChannelTopTitle;
  $_('.channel-top__item-days-ago', elChannelTopItem).textContent = ChannelTopObj.ChannelTopDaysAgo;
  $_('.channel-top__item-person', elChannelTopItem).textContent = ChannelTopObj.ChannelTopPerson;
  $_('.channel-top__item-time', elChannelTopItem).textContent = ChannelTopObj.ChannelTopTime;
  $_('.channel-top__item-time', elChannelTopItem).datetime = `${ChannelTopObj.ChannelTopTime}`;
  $_('.channel-top__item-clock', elChannelTopItem).dataset.ChannelId = ChannelTopObj.ChannelTopId;

  elChannelTopFragment.appendChild(elChannelTopItem);
});
$_('.channel-top__list').appendChild(elChannelTopFragment);


//RECOMMENDED

var recommended = [
  {
    recommendedImg: './imgs/recommend-img-1.png',
    recommendedImg2x: 'imgs/recommend-img-1.png 1x, imgs/recommend-img-1@2x.png 2x',
    recommendedTime: '3:40',
    recommendedTitle: 'Dude You Re Getting A Telescope',
    recommendedDaysAgo: '34k views  ·  5 months ago',
    recommendedPerson: 'Gussie French',
    recommendedID: 'r1'
  },
  {
    recommendedImg: './imgs/recommend-img-2.png',
    recommendedImg2x: 'imgs/recommend-img-2.png 1x, imgs/recommend-img-2@2x.png 2x',
    recommendedTime: '2:12',
    recommendedTitle: 'Moon Gazing',
    recommendedDaysAgo: '54k views  ·  11 months ago',
    recommendedPerson: 'Edward Osborne',
    recommendedID: 'r2'
  },
  {
    recommendedImg: './imgs/recommend-img-3.png',
    recommendedImg2x: 'imgs/recommend-img-3.png 1x, imgs/recommend-img-3@2x.png 2x',
    recommendedTime: '2:12',
    recommendedTitle: 'Moon Gazing',
    recommendedDaysAgo: '125k views  ·  4 months ago',
    recommendedPerson: 'Dollie Blair',
    recommendedID: 'r3'
  }
]

var elRecommendedTemplate = $_('.recommended__template').content;

var elRecommendedFragment = document.createDocumentFragment();
recommended.forEach(function (recommendedObj, recommendedId){
  var elrecommendedItem = elRecommendedTemplate.cloneNode(true);

  $_('.recommended__link-img', elrecommendedItem).src = `${recommendedObj.recommendedImg}`;
  $_('.recommended__link-img', elrecommendedItem).srcset = `${recommendedObj.recommendedImg2x}`;
  $_('.recommended__link-time', elrecommendedItem).textContent = recommendedObj.recommendedTime;
  $_('.recommended__link-title', elrecommendedItem).textContent = recommendedObj.recommendedTitle;
  $_('.recommended__link-days-ago', elrecommendedItem).textContent = recommendedObj.recommendedDaysAgo;
  $_('.recommended__link-person', elrecommendedItem).textContent = recommendedObj.recommendedPerson;
  $_('.recommended__link-clock', elrecommendedItem).dataset.test = recommendedObj.recommendedID;

  elRecommendedFragment.appendChild(elrecommendedItem);
});

$_('.recommended__list').appendChild(elRecommendedFragment);


//CHANNEL-BOTTOM

var ChannelBottom = [
  {
    ChannelBottomImg: './imgs/ice-cream.png',
    ChannelBottomImg2X: 'imgs/ice-cream.png 1x, imgs/ice-cream@2x.png 2x',
    ChannelBottomTitle: 'Astronomy Or Astrology',
    ChannelBottomDaysAgo: '240k views  ·  4 months ago',
    ChannelBottomPerson: 'Food & Drink',
    ChannelBottomTime: '7:36',
    ChannelBottomId: 'b1'
  },
  {
    ChannelBottomImg: './imgs/cherry.png',
    ChannelBottomImg2X: 'imgs/cherry.png 1x, imgs/cherry@2x.png 2x',
    ChannelBottomTitle: 'Advertising Outdoors',
    ChannelBottomDaysAgo: '13k views  ·  15 days ago',
    ChannelBottomPerson: 'Food & Drink',
    ChannelBottomTime: '2:19',
    ChannelBottomId: 'b2'
  },
  {
    ChannelBottomImg: './imgs/spaghetti.png',
    ChannelBottomImg2X: 'imgs/spaghetti.png 1x, imgs/spaghetti@2x.png 2x',
    ChannelBottomTitle: 'Radio Astronomy',
    ChannelBottomDaysAgo: '1k views  ·  11 months ago',
    ChannelBottomPerson: 'Food & Drink',
    ChannelBottomTime: '9:05',
    ChannelBottomId: 'b3'
  },
  {
    ChannelBottomImg: './imgs/mandarin.png',
    ChannelBottomImg2X: 'imgs/mandarin.png 1x, imgs/mandarin@2x.png 2x',
    ChannelBottomTitle: 'A Good Autoresponder',
    ChannelBottomDaysAgo: '45k views  ·  2 months ago',
    ChannelBottomPerson: 'Food & Drink',
    ChannelBottomTime: '3:40',
    ChannelBottomId: 'b4'
  },
  {
    ChannelBottomImg: './imgs/buns.png',
    ChannelBottomImg2X: 'imgs/buns.png 1x, imgs/buns@2x.png 2x',
    ChannelBottomTitle: 'Baby Monitor Technology',
    ChannelBottomDaysAgo: '86k views  ·  7 days ago',
    ChannelBottomPerson: 'Food & Drink',
    ChannelBottomTime: '1:56',
    ChannelBottomId: 'b5'
  },
  {
    ChannelBottomImg: './imgs/watermelon.png',
    ChannelBottomImg2X: 'imgs/watermelon.png 1x, imgs/watermelon@2x.png 2x',
    ChannelBottomTitle: 'Asteroids',
    ChannelBottomDaysAgo: '123k views  ·  4 months ago',
    ChannelBottomPerson: 'Dollie Blair',
    ChannelBottomTime: '4:15',
    ChannelBottomId: 'b6'
  }
]

var elChannelBottomTemplate = $_('.channel-bottom__template').content;

var elChannelBottomFragment = document.createDocumentFragment();
ChannelBottom.forEach(function (ChannelBottomObj, ChannelBottomId) {
  var ChannelBottomItem = elChannelBottomTemplate.cloneNode(true);

  $_('.channel-bottom__link-img', ChannelBottomItem).src = `${ChannelBottomObj.ChannelBottomImg}`;
  $_('.channel-bottom__link-img', ChannelBottomItem).srcset = `${ChannelBottomObj.ChannelBottomImg2X}`;
  $_('.channel-bottom__link-title', ChannelBottomItem).textContent = ChannelBottomObj.ChannelBottomTitle;
  $_('.channel-bottom__days-ago', ChannelBottomItem).textContent = ChannelBottomObj.ChannelBottomDaysAgo;
  $_('.channel-bottom__channel', ChannelBottomItem).textContent = ChannelBottomObj.ChannelBottomPerson;
  $_('.channel-bottom__link-time', ChannelBottomItem).textContent = ChannelBottomObj.ChannelBottomTime;
  $_('.channel-bottom__link-clock', ChannelBottomItem).dataset.BottomID = ChannelBottomObj.ChannelBottomId;

  elChannelTopFragment.appendChild(ChannelBottomItem);
});
$_('.channel-bottom__list').appendChild(elChannelTopFragment);


watchList();

elRecommended.addEventListener('click', function(evt) {
  if(evt.target.matches(`.recommended__link-clock`)) {
    var Id = evt.target.dataset.test;
    recommended.forEach(function (intro, index) {
      if (intro.recommendedID === Id) {
        watchLater.push(intro)
        watchList()
      }
    })
  }
});

elChannelTopList.addEventListener('click', function(evt) {
  if(evt.target.matches(`.channel-top__item-clock`)) {
    var Id = evt.target.dataset.ChannelId;
    ChannelTop.forEach(function (intro, index) {
      if (intro.ChannelTopId === Id) {
        watchLater.push(intro)
        watchList()
      }
    })
  }
});

elChannelBottomList.addEventListener('click', function(evt) {
  if(evt.target.matches(`.channel-bottom__link-clock`)) {
    var Id = evt.target.dataset.BottomID;
    ChannelBottom.forEach(function (intro, index) {
      if (intro.ChannelBottomId === Id) {
        watchLater.push(intro)
        watchList()
      }
    })
  }
});
