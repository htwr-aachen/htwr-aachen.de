import urlJoin from "./url";

describe("urlJoin", () => {
  test("joins two valid urls together", () => {
    expect(urlJoin("https://api.htwr-aachen.de", "/panikzettel")).toBe(
      "https://api.htwr-aachen.de/panikzettel",
    );
  });

  test("consecutive joins", () => {
    expect(urlJoin("https://api.htwr-aachen.de", "/panikzettel", "test")).toBe(
      "https://api.htwr-aachen.de/panikzettel/test",
    );
  });

  // include tests from lib
  // CODE BY: jfromaniello (https://github.com/jfromaniello/url-join)

  test("joins a simple URL", () => {
    expect(urlJoin("http://www.google.com/", "foo/bar", "?test=123")).toBe(
      "http://www.google.com/foo/bar?test=123",
    );
  });

  test("joins a simple URL with new syntax", () => {
    expect(urlJoin(["http://www.google.com/", "foo/bar", "?test=123"])).toBe(
      "http://www.google.com/foo/bar?test=123",
    );
  });

  test("joins a hashbang", () => {
    expect(
      urlJoin(["http://www.google.com", "#!", "foo/bar", "?test=123"]),
    ).toBe("http://www.google.com/#!/foo/bar?test=123");
  });

  test("joins a protocol", () => {
    expect(urlJoin("http:", "www.google.com/", "foo/bar", "?test=123")).toBe(
      "http://www.google.com/foo/bar?test=123",
    );
  });

  test("joins a protocol with slashes", () => {
    expect(urlJoin("http://", "www.google.com/", "foo/bar", "?test=123")).toBe(
      "http://www.google.com/foo/bar?test=123",
    );
  });

  test("removes extra slashes", () => {
    expect(urlJoin("http:", "www.google.com///", "foo/bar", "?test=123")).toBe(
      "http://www.google.com/foo/bar?test=123",
    );
  });

  test("removes extra slashes in an encoded URL", () => {
    expect(
      urlJoin(
        "http:",
        "www.google.com///",
        "foo/bar",
        "?url=http%3A//Ftest.com",
      ),
    ).toBe("http://www.google.com/foo/bar?url=http%3A//Ftest.com");

    expect(urlJoin("http://a.com/23d04b3/", "/b/c.html")).toBe(
      "http://a.com/23d04b3/b/c.html",
    );

    expect(urlJoin("/foo", "/", "bar", "?test=123")).toBe("/foo/bar?test=123");
  });

  test("joins anchors in URLs", () => {
    expect(
      urlJoin("http:", "www.google.com///", "foo/bar", "?test=123", "#faaaaa"),
    ).toBe("http://www.google.com/foo/bar?test=123#faaaaa");
  });

  test("joins protocol-relative URLs", () => {
    expect(urlJoin("//www.google.com", "foo/bar", "?test=123")).toBe(
      "//www.google.com/foo/bar?test=123",
    );
  });

  test("joins file protocol URLs", () => {
    expect(urlJoin("file:/", "android_asset", "foo/bar")).toBe(
      "file://android_asset/foo/bar",
    );

    expect(urlJoin("file:", "/android_asset", "foo/bar")).toBe(
      "file://android_asset/foo/bar",
    );
  });

  test("joins absolute file protocol URLs", () => {
    expect(urlJoin("file:", "///android_asset", "foo/bar")).toBe(
      "file:///android_asset/foo/bar",
    );

    expect(urlJoin("file:///", "android_asset", "foo/bar")).toBe(
      "file:///android_asset/foo/bar",
    );

    expect(urlJoin("file:///", "//android_asset", "foo/bar")).toBe(
      "file:///android_asset/foo/bar",
    );

    expect(urlJoin("file:///android_asset", "foo/bar")).toBe(
      "file:///android_asset/foo/bar",
    );
  });

  test("joins multiple query params", () => {
    expect(
      urlJoin("http:", "www.google.com///", "foo/bar", "?test=123", "?key=456"),
    ).toBe("http://www.google.com/foo/bar?test=123&key=456");

    expect(
      urlJoin(
        "http:",
        "www.google.com///",
        "foo/bar",
        "?test=123",
        "?boom=value",
        "&key=456",
      ),
    ).toBe("http://www.google.com/foo/bar?test=123&boom=value&key=456");

    expect(
      urlJoin("http://example.org/x", "?a=1", "?b=2", "?c=3", "?d=4"),
    ).toBe("http://example.org/x?a=1&b=2&c=3&d=4");

    expect(
      urlJoin("http:", "www.google.com///", "foo/bar", "&test=123", "&key=456"),
    ).toBe("http://www.google.com/foo/bar?test=123&key=456");

    expect(
      urlJoin("http:", "www.google.com///", "foo/bar", "&test=123", "?key=456"),
    ).toBe("http://www.google.com/foo/bar?test=123&key=456");
  });

  test("filters out empty query parameters", () => {
    expect(urlJoin("http://google.com", "?")).toBe("http://google.com");

    expect(urlJoin("http://google.com", "&")).toBe("http://google.com");
  });

  test("joins slashes in paths", () => {
    expect(urlJoin("http://example.org", "a//", "b//", "A//", "B//")).toBe(
      "http://example.org/a/b/A/B/",
    );
  });

  test("joins colons in paths", () => {
    expect(urlJoin("http://example.org/", ":foo:", "bar")).toBe(
      "http://example.org/:foo:/bar",
    );
  });

  test("joins a simple path without a URL", () => {
    expect(urlJoin("/", "test")).toBe("/test");
  });

  test("throws for segments that are not a string", () => {
    expect(() => urlJoin(true)).toThrow(/Url must be a string. Received true/);

    expect(() => urlJoin("http://blabla.com/", 1)).toThrow(
      /Url must be a string. Received 1/,
    );

    expect(() => urlJoin("http://blabla.com/", undefined, "test")).toThrow(
      /Url must be a string. Received undefined/,
    );

    expect(() => urlJoin("http://blabla.com/", null, "test")).toThrow(
      /Url must be a string. Received null/,
    );

    expect(() => urlJoin("http://blabla.com/", { foo: 123 }, "test")).toThrow(
      /Url must be a string. Received \[object Object\]/,
    );
  });

  test("joins a path with a colon", () => {
    expect(urlJoin("/users/:userId", "/cars/:carId")).toBe(
      "/users/:userId/cars/:carId",
    );
  });
});
