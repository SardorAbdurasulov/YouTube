var $_ = (selector, node = document) => {
  return node.querySelector(selector);
};

var $$_ = (selector, node = document) => {
  return node.querySelectorAll(selector);
};

var createElement = (element, elementClass, text) => {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};

//MENU-BUTTON
var elMenuButton = document.querySelector(`.site-header__button`);
var elMenu = document.querySelector(`.menu-section`);

elMenuButton.addEventListener(`click`, () => {
  elMenu.classList.toggle(`site-menu--none`)
});

//DOM
var elChannelTopList = $_('.channel-top__list');
var elChannelTopItem = $_('.channel-top__item');
var elChannelTopTemplate = $_('.channel-top__template').content;
var elChannelTopFragment = document.createDocumentFragment();

var elRecommendedList = $_('.recommended__list');
var elRecommendedTemplate = $_('.recommended__template').content;
var elRecommendedFragment = document.createDocumentFragment();

var elChannelBottomList = $_('.channel-bottom__list');
var elChannelBottomTemplate = $_('.channel-bottom__template').content;
var elChannelBottomFragment = document.createDocumentFragment();

var elWatchLaterList = $_('.watch-later__list')
var elWatchLaterTemplate = $_('.watch-later__template').content;
var elWatchLaterFragment = document.createDocumentFragment();

//OBJ

var watchLater = [];

var channelTop = [
  {
    title: 'A Brief History Of Creation',
    dayAgo: '80k views  ·  3 days ago',
    person: 'Dollie Blair',
    img: './imgs/video-img-1.png',
    time: '4:15',
    buttonId: 01
  },
  {
    title: 'Selecting The Right Hotel',
    dayAgo: '123k views  ·  1 months ago',
    person: 'Dollie Blair',
    img: './imgs/video-img-2.png',
    time: '8:00',
    buttonId: 02
  },
  {
    title: 'Asteroids',
    dayAgo: '43k views  ·  12 days ago',
    person: 'Dollie Blair',
    img: './imgs/video-img-3.png',
    time: '5:32',
    buttonId: 03
  },
  {
    title: 'Telescopes 101',
    dayAgo: '11k views  ·  6 months ago',
    person: 'Dollie Blair',
    img: './imgs/video-img-4.png',
    time: '6:40',
    buttonId: 04
  },
  {
    title: 'Medical Care Is Just',
    dayAgo: '18k views  ·  2 days ago',
    person: 'Dollie Blair',
    img: './imgs/video-img-5.png',
    time: '1:45',
    buttonId: 05
  },
  {
    title: 'Moon Gazing',
    dayAgo: '67k views  ·  4 months ago',
    person: 'Dollie Blair',
    img: './imgs/Cover.png',
    time: '2:12',
    buttonId: 06
  }
];

var recommended = [
  {
    title: 'Dude You Re Getting A Telescope',
    dayAgo: '34k views  ·  5 months ago',
    person: 'Gussie French',
    img: './imgs/recommend-img-1.png',
    time: '3:40',
    buttonId: 51
  },
  {
    title: 'Moon Gazing',
    dayAgo: '54k views  ·  11 months ago',
    person: 'Edward Osborne',
    img: './imgs/recommend-img-2.png',
    time: '2:12',
    buttonId: 52
  },
  {
    title: 'Moon Gazing',
    dayAgo: '125k views  ·  4 months ago',
    person: 'Dollie Blair',
    img: './imgs/recommend-img-3.png',
    time: '2:12',
    buttonId: 53
  }
];

var channelBottom = [
  {
    title: 'Astronomy Or Astrology',
    dayAgo: '240k views  ·  4 months ago',
    person: 'Food & Drink',
    img: './imgs/ice-cream.png',
    time: '7:36',
    buttonId: 61
  },
  {
    title: 'Advertising Outdoors',
    dayAgo: '13k views  ·  15 days ago',
    person: 'Food & Drink',
    img: './imgs/cherry.png',
    time: '2:19',
    buttonId: 62
  },
  {
    title: 'Radio Astronomy',
    dayAgo: '1k views  ·  11 months ago',
    person: 'Food & Drink',
    img: './imgs/spaghetti.png',
    time: '9:05',
    buttonId: 63
  },
  {
    title: 'A Good Autoresponder',
    dayAgo: '45k views  ·  2 months ago',
    person: 'Food & Drink',
    img: './imgs/mandarin.png',
    time: '3:40',
    buttonId: 64
  },
  {
    title: 'Baby Monitor Technology',
    dayAgo: '86k views  ·  7 days ago',
    person: 'Food & Drink',
    img: './imgs/buns.png',
    time: '1:56',
    buttonId: 65
  },
  {
    title: 'Asteroids',
    dayAgo: '123k views  ·  4 months ago',
    person: 'Dollie Blair',
    img: './imgs/watermelon.png',
    time: '4:15',
    buttonId: 66
  }
];

//CHANNELLARNI forEach qilish

channelTop.forEach((channelTop) => {
  var channelTopItem = elChannelTopTemplate.cloneNode(true);

  $_('.channel-top__item-title', channelTopItem).textContent = channelTop.title;
  $_('.channel-top__item-days-ago', channelTopItem).textContent = channelTop.dayAgo;
  $_('.channel-top__item-person', channelTopItem).textContent = channelTop.person;
  $_('.channel-top__img', channelTopItem).src = channelTop.img;
  $_('.channel-top__img', channelTopItem).alt = channelTop.title;
  $_('.channel-top__item-time', channelTopItem).textContent = channelTop.time;
  $_('.channel-top__item-clock', channelTopItem).dataset.Id = channelTop.buttonId;

  elChannelTopFragment.appendChild(channelTopItem);
});
elChannelTopList.appendChild(elChannelTopFragment);


recommended.forEach((recommended) => {
  var recommendedItem = elRecommendedTemplate.cloneNode(true);

  $_('.recommended__link-title', recommendedItem).textContent = recommended.title;
  $_('.recommended__link-days-ago', recommendedItem).textContent = recommended.dayAgo;
  $_('.recommended__link-person', recommendedItem).textContent = recommended.person;
  $_('.recommended__link-img', recommendedItem).src = recommended.img;
  $_('.recommended__link-img', recommendedItem).alt = recommended.title;
  $_('.recommended__link-time', recommendedItem).textContent = recommended.time;
  $_('.recommended__link-clock', recommendedItem).dataset.Id = recommended.buttonId;

  elRecommendedFragment.appendChild(recommendedItem);
});
elRecommendedList.appendChild(elRecommendedFragment);


channelBottom.forEach((channelBottom) => {
  var channelBottomItem = elChannelBottomTemplate.cloneNode(true);

  $_('.channel-bottom__link-title', channelBottomItem).textContent = channelBottom.title;
  $_('.channel-bottom__days-ago', channelBottomItem).textContent = channelBottom.dayAgo;
  $_('.channel-bottom__channel', channelBottomItem).textContent = channelBottom.person;
  $_('.channel-bottom__link-img', channelBottomItem).src = channelBottom.img;
  $_('.channel-bottom__link-img', channelBottomItem).alt = channelBottom.title;
  $_('.channel-bottom__link-time', channelBottomItem).textContent = channelBottom.time;
  $_('.channel-bottom__link-clock', channelBottomItem).dataset.Id = channelBottom.buttonId;

  elChannelBottomFragment.appendChild(channelBottomItem);
});
elChannelBottomList.appendChild(elChannelBottomFragment);


watchLaterList = obj => {
  watchLater.forEach(later => {
    var watchLaterItem = elWatchLaterTemplate.cloneNode(true);

    $_('.watch-later__item-title', watchLaterItem).textContent = later.title;
    $_('.watch-later__item-days-ago', watchLaterItem).textContent = later.dayAgo;
    $_('.watch-later__item-person', watchLaterItem).textContent = later.person;
    $_('.watch-later__img', watchLaterItem).src = later.img;
    $_('.watch-later__img', watchLaterItem).alt = later.title;
    $_('.watch-later__item-time', watchLaterItem).textContent = later.time;
    $_('.watch-later__item-clock', watchLaterItem).dataset.watchLater = later.buttonId;

    elWatchLaterFragment.appendChild(watchLaterItem);
  });
  elWatchLaterList.appendChild(elWatchLaterFragment);
};

elChannelTopList.addEventListener('click', (evt) => {
  if (evt.target.matches('.channel-top__item-clock')) {
    var TopWatchLater = channelTop.find((top) => {
      return top.buttonId === Number(evt.target.dataset.Id)
    });
    var channelTopWatchLater = watchLater.findIndex(top => {
      return top.buttonId === Number(evt.target.dataset.Id)
    });
    if (channelTopWatchLater === -1){
      watchLater.push(TopWatchLater);
      elWatchLaterList.innerHTML = '';
      watchLaterList();
    } else {
      watchLater.splice(channelTopWatchLater, 1);
      elWatchLaterList.innerHTML = '';
      watchLaterList();
    }
  };
});

elRecommendedList.addEventListener('click', evt => {
  if (evt.target.matches('.recommended__link-clock')) {
    var recommend = recommended.find(rec =>{
      return rec.buttonId === Number(evt.target.dataset.Id);
    });
    var watchRecommended = watchLater.findIndex(rec =>{
      return rec.buttonId === Number(evt.target.dataset.Id);
    });
    if (watchRecommended === -1) {
      watchLater.push(recommend);
      elWatchLaterList.innerHTML = '';
      watchLaterList();
    } else {
      watchLater.splice(watchRecommended, 1);
      elWatchLaterList.innerHTML = '';
      watchLaterList();
    }
  };
});

elChannelBottomList.addEventListener('click', evt => {
  if (evt.target.matches('.channel-bottom__link-clock')) {
    var channelBottomList = channelBottom.find(bottom => {
      return bottom.buttonId === Number(evt.target.dataset.Id);
    });
    var watchLaterBottom = watchLater.findIndex(bottom => {
      return bottom.buttonId === Number(evt.target.dataset.Id);
    });
    if (watchLaterBottom === -1) {
      watchLater.push(channelBottomList);
      elWatchLaterList.innerHTML = '';
      watchLaterList();
    } else  {
      watchLater.splice(watchLaterBottom, 1);
      elWatchLaterList.innerHTML = '';
      watchLaterList();
    };
  };
});

elWatchLaterList.addEventListener('click', evt => {
  var watchLaterBottom = watchLater.findIndex(bottom => {
      return bottom.buttonId === Number(evt.target.dataset.watchLater);
    });
  if (evt.target.matches('.watch-later__item-clock')) {
    watchLater.splice(watchLaterBottom, 1);
      elWatchLaterList.innerHTML = '';
      watchLaterList();
  };
});
