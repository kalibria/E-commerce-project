import { getCookie, setCookie } from "./cookie";

// elements
const footerCookieBarElem = document.querySelector(".footer__cookie");
const acceptCookiesBtn = document.querySelector(".cookie-button__accept");

const closeAdsBtn = document.querySelector(".cookie-buton__close");


const wantsToHideAdsKey = 'wantsToHideAds';

export function acceptCookies(e) {
    e.preventDefault();

    setCookie(wantsToHideAdsKey, "1");

    footerCookieBarElem?.remove();
}

export function closeAdvertizing(e) {
    e.preventDefault();

    footerCookieBarElem?.remove();
}

const wantsToHideAds = getCookie(wantsToHideAdsKey);

const shouldShowCookieBanner = wantsToHideAds === undefined && footerCookieBarElem;

if (shouldShowCookieBanner) {
    footerCookieBarElem.style.display = 'flex';
}

acceptCookiesBtn.addEventListener('click', acceptCookies)
closeAdsBtn.addEventListener('click', closeAdvertizing)
