import { faUserAgent } from '.';

test('faUserAgent', () => {
    const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36';
    const expected = {"browser": {"name": "fa-chrome", "style": "fab"}, "os": {"name": "fa-question", "style": "fas"}, "platform": {"name": "fa-desktop", "style": "fas"}};
    expect(faUserAgent(userAgent)).toEqual(expected);
});
