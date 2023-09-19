var ajakanMe = document.getElementById("ajakanMe"),
  loader = document.getElementById("loader");
loader && (window.onload = loader.style.display = "none");
const main = new Splide("#ajakanMe", {
    perPage: 1,
    arrows: !1,
    height: "100%",
    direction: "ttb",
    pagination: !1,
    updateOnMove: !0,
    drag: false,
    type: "fade",
    noDrag: "input, textarea, .rsvp-placeholder",
  }),
  menu = new Splide("#menuSlider", {
    fixedWidth: "25%",
    fixedHeight: 60,
    focus: "center",
    arrows: !1,
    rewind: !0,
    pagination: !1,
    cover: !1,
    updateOnMove: !0,
    isNavigation: !0,
  });
// gift = new Splide("#giftSlider", {
//     // fixedWidth: "25%"
//     height : '7rem',
//     perPage: 2,
//     gap    : '1rem',
//     drag   : false,
// });
main.mount();
if (document.getElementById("inner-slider")) {
  var innerSlider = new Splide("#inner-slider", {
    // height : '7rem',
    height: "100%",
    // fixedWidth: "80%",
    // width: "100%",

    perPage: 1,
    // gap    : '1rem',
    drag: false,
    grid: {
      rows: 2,
      cols: 2,
      gap: {
        row: "1rem",
        col: "1.5rem",
      },
    },
  });
  innerSlider.mount(window.splide.Extensions);
}

var guestName = ajakanMe.dataset.guest,
  guestNameSlot = document.getElementById("guestNameSlot");
guestName && guestNameSlot && (guestNameSlot.innerHTML = guestName);
var groupName = ajakanMe.dataset.group,
  groupNameSlot = document.getElementById("groupNameSlot");
groupName && groupNameSlot && (groupNameSlot.innerHTML = groupName);
var btnMusic = document.getElementById("btnMusic"),
  music = document.getElementById("music")
    ? document.getElementById("music")
    : null,
  iframeElement = document.querySelector(".sc-music > iframe"),
  widget = iframeElement ? SC.Widget(iframeElement) : null;
let isPlaying = !1;
(playMusic = (e) => {
  e
    ? music && music.play()
    : music && (isPlaying ? music.pause() : music.play()),
    widget &&
      SC.Widget.Events.READY &&
      (isPlaying
        ? (widget.pause(), (isPlaying = !1))
        : (widget.play(), (isPlaying = !0)));
}),
  music &&
    ((music.onplaying = function () {
      isPlaying = !0;
    }),
    (music.onpause = function () {
      isPlaying = !1;
    })),
  (openFullScreen = () => {
    document.documentElement.requestFullscreen
      ? document.documentElement.requestFullscreen()
      : document.documentElement.webkitRequestFullscreen
      ? document.documentElement.webkitRequestFullscreen()
      : document.documentElement.msRequestFullscreen &&
        document.documentElement.msRequestFullscreen();
  }),
  (openInvitation = (e) => {
    playMusic(e);
    playMusic(e);
    if (
      (settings_fullscreen != 0 || settings_fullscreen != false) &&
      settings_fullscreen != undefined
    ) {
      openFullScreen();
    }
  });
var invToggle = (e) => {
    this.openInvitation(),
      null === document.querySelector(".no-menu")
        ? (menu.mount(), main.sync(menu), menu.go(1))
        : main.go(1),
      ajakanMe.classList.remove("not-open"),
      (e.target.style.display = "none"),
      (document.getElementById("btnMusic").style.display = "flex");
    // console.log(main.Components)
    // const {Drag} = main.Components;
    const Drag = main.Components.Drag;

    Drag.disable(false);
  },
  btnOpenInvitation = document.getElementsByClassName("btn-open-invitation");
for (let e = 0; e < btnOpenInvitation.length; e++) {
  // console.log(btnOpenInvitation)
  btnOpenInvitation[e].addEventListener("click", invToggle, !1);
  // btnOpenInvitation[e].addEventListener("click", playMusic, !1);
}
showGift = (e) => {
  for (let t = 0; t < btnGift.length; t++)
    t != e && (giftContainer[t].style.display = "none");
  giftContainer[e].style.display = "inherit";
};
var giftContainer = document.getElementsByClassName("gift-container");
for (let e = 0; e < giftContainer.length; e++)
  giftContainer[e].style.display = "none";
var btnGift = document.getElementsByClassName("btn-gift");
for (let e = 0; e < btnGift.length; e++)
  btnGift[e].onclick = () => {
    this.showGift(e);
  };
var lightboxWrapper = document.getElementById("lightboxWrapper"),
  lightboxCloseBtn = document.getElementById("lightboxCloseBtn"),
  lightboxNextBtn = document.getElementById("lightboxNextBtn"),
  lightboxPrevBtn = document.getElementById("lightboxPrevBtn"),
  lightboxList = document.querySelector("#lightboxWrapper > .lightbox-list"),
  images = document.getElementsByClassName("lightbox");
(showLightbox = (e) => {
  lightboxWrapper.classList.add("show"),
    (lightboxList.innerHTML = `<div class="lightbox-inner"><img src="${images[e].src}"></div>`),
    (lightboxNextBtn.dataset.index = e),
    (lightboxPrevBtn.dataset.index = e);
}),
  (lightboxNextBtn.onclick = () => {
    let e = parseInt(lightboxNextBtn.dataset.index) + 1;
    e >= images.length && (e = 0), this.showLightbox(e);
  }),
  (lightboxPrevBtn.onclick = () => {
    let e = parseInt(lightboxPrevBtn.dataset.index) - 1;
    -1 == e && (e = images.length - 1), this.showLightbox(e);
  }),
  (closeLightbox = () => {
    lightboxWrapper.classList.remove("show"), (lightboxList.innerHTML = "");
  });
for (let e = 0; e < images.length; e++)
  images[e].onclick = () => {
    this.showLightbox(e);
  };
lightboxCloseBtn.onclick = () => {
  this.closeLightbox();
};
var body = document.getElementsByTagName("BODY")[0],
  modalOverlay = document.getElementById("modalOverlay");
(showModal = (e) => {
  body.classList.add("modal-open"),
    modalOverlay.classList.add("show"),
    (modalOverlay.style = "display: block;"),
    e.classList.add("show"),
    (e.style = "display: block;");
}),
  (closeModal = (e) => {
    body.classList.remove("modal-open"),
      modalOverlay.classList.remove("show"),
      (modalOverlay.style = "display: none;"),
      e.classList.remove("show"),
      (e.style = "display: none;");
  });
var countdownElement = document.getElementsByClassName("countdown-wrapper");
displayCountdown = (e) => {
  var t = new Date(e.dataset.datetime).getTime(),
    n = e.querySelector(".countdown > .day > .number"),
    l = e.querySelector(".countdown > .hour > .number"),
    o = e.querySelector(".countdown > .minute > .number"),
    a = e.querySelector(".countdown > .second > .number"),
    i = setInterval(function () {
      var e = new Date().getTime(),
        s = t - e,
        r = Math.floor(s / 864e5),
        m = Math.floor((s % 864e5) / 36e5),
        u = Math.floor((s % 36e5) / 6e4),
        d = Math.floor((s % 6e4) / 1e3);
      (n.innerHTML = r),
        (l.innerHTML = m),
        (o.innerHTML = u),
        (a.innerHTML = d),
        s < 0 &&
          (clearInterval(i),
          (n.innerHTML = "00"),
          (l.innerHTML = "00"),
          (o.innerHTML = "00"),
          (a.innerHTML = "00"));
    }, 1e3);
};
for (let e = 0; e < countdownElement.length; e++)
  this.displayCountdown(countdownElement[e]);
var btnRsvp = document.getElementsByClassName("btn-rsvp"),
  rsvpPlaceholder = document.querySelector(".rsvp-placeholder")
    ? document.getElementById(".rsvp-placeholder")
    : null,
  rsvpForm = document.querySelector(".rsvp-form")
    ? document.getElementById(".rsvp-form")
    : null;
for (let e = 0; e < btnRsvp.length; e++)
  rsvpPlaceholder
    ? (btnRsvp[e].style.display = "none")
    : (btnRsvp[e].onclick = () => {
        this.showModal(rsvpModal);
      });
rsvpForm &&
  rsvpPlaceholder &&
  ((rsvpPlaceholder.innerHTML = ""), rsvpPlaceholder.appendChild(rsvpForm));
var app = document.getElementById("app")
    ? document.getElementById("app")
    : null,
  // illegal = document.getElementById("illegal") ? document.getElementById("illegal") : null,
  wm = document.getElementById("waterMark")
    ? document.getElementById("waterMark")
    : null,
  wmp = document.querySelector(".watermark-placeholder")
    ? document.getElementById(".watermark-placeholder")
    : null,
  nowm = document.querySelector(".no-watermark")
    ? document.getElementById(".no-watermark")
    : null,
  wmLayout = document.querySelector(".watermark")
    ? document.getElementById(".watermark")
    : null;
// wm && wmp && null == nowm ? (wm.style.display = "inherit", wmp.appendChild(wm), illegal.style.display = "none") : wmLayout && null == wmp ? (app.innerHTML = "", illegal.style.display = "flex") : (wm.style.display = "none", illegal.style.display = "none");
// copy rekening
var accountNumber = document.getElementsByClassName("account-number");
for (let e = 0; e < accountNumber.length; e++) {
  let onlyNumber = accountNumber[e].children[0].innerHTML;
  accountNumber[e].innerHTML &&
    accountNumber[e].insertAdjacentHTML(
      "afterend",
      `<button type='button' class='btn btn-sm btn-primary mt-2 mb-2 animate__animated animate__fadeInUp animate__slow delay-5' data-text='${onlyNumber}' onclick='copyBank(event,"${onlyNumber}")' style='font-family: sans-serif; border-radius: 4px'>Copy Rekening</button>`
    );
}

// isIOS = () => {
//     function isIOS() {
//         return [
//           'iPad Simulator',
//           'iPhone Simulator',
//           'iPod Simulator',
//           'iPad',
//           'iPhone',
//           'iPod'
//         ].includes(navigator.platform)
//         // iPad on iOS 13 detection
//         || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
//       }
// }
copyText = (e) => {
  var tempInput = document.createElement("input");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-1000px";
  tempInput.value = e.target.dataset.text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  toastr.success("Successfully copied account number");

  // navigator.clipboard.writeText(e.target.dataset.text);
  e.target.innerHTML = "Berhasil Dicopy";
  // let t = document.createElement("input");
  // t.autofocus = !1, t.value = e.target.dataset.text, document.body.appendChild(t), t.select(), document.execCommand("copy"), t.remove()
};
