import { faUserAgent } from ".";

test("faUserAgent", () => {
  const userAgent =
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36";
  const expected = {
    browser: { name: "fa-chrome", style: "fab" },
    os: { name: "fa-question", style: "fas" },
    platform: { name: "fa-desktop", style: "fas" }
  };
  expect(faUserAgent(userAgent)).toEqual(expected);
  const userAgent2 =
    "Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0";
  const expected2 = {
    browser: { name: "fa-question", style: "fas" },
    os: { name: "fa-android-custom", style: "fab" },
    platform: { name: "fa-mobile-alt", style: "fas" }
  };
  const result = faUserAgent(userAgent2, options => {
      options.icons.os.Android.name = "android-custom"
      return options;
  });
  expect(result).toEqual(expected2);
});
