import { action, makeObservable, observable } from "mobx";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export class PageStore {
  selectedLanguage = cookies.get("selectedLanguage");
  allowCookie = cookies.get("allowCookie");
  selectedCarouselPage = 1;

  constructor() {
    makeObservable(this, {
      selectedLanguage: observable,
      setSelectedLanguage: action,
      allowCookie: observable,
      setAllowCookie: action,
      selectedCarouselPage: observable,
      setSelectedCarouselPage: action,
      setCarouselNext: action,
      setCarouselPrevious: action,
    });
  }

  setSelectedLanguage = (selectedLanguage) => {
    this.selectedLanguage = selectedLanguage;
    if (this.allowCookie) {
      cookies.set("selectedLanguage", selectedLanguage, { path: "/" });
    }
  };

  setAllowCookie = (allowCookie) => {
    this.allowCookie = allowCookie;
    if (allowCookie) {
      cookies.set("allowCookie", true, { path: "/" });
    }
  };

  setSelectedCarouselPage = (selectedCarouselPage) => {
    this.selectedCarouselPage = selectedCarouselPage;
  };

  setCarouselNext = () => {
    if (this.selectedCarouselPage === 3) {
      this.setSelectedCarouselPage(1);
    } else {
      this.setSelectedCarouselPage(this.selectedCarouselPage + 1);
    }
  };

  setCarouselPrevious = () => {
    if (this.selectedCarouselPage === 1) {
      this.setSelectedCarouselPage(3);
    } else {
      this.setSelectedCarouselPage(this.selectedCarouselPage - 1);
    }
  };
}

export const pageStore = new PageStore();
