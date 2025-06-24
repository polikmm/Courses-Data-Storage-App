import "@testing-library/jest-dom";
import "whatwg-fetch";
import "fast-text-encoding";

import { mockedCoursesData } from "../mockedData";

globalThis.fetch = jest.fn(() =>
  Promise.resolve(
    new Response(JSON.stringify(mockedCoursesData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  )
);
