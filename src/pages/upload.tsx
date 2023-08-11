import { HeadLine } from "@/components/rwth/headline";
import Main from "@/layouts/Main";
import { Meta } from "@/layouts/Meta";

export default function UploadPage() {
  return (
    <Main
      meta={
        <Meta
          title="Upload Klausuren/Aufgaben/Feedback - HTWR"
          description="Upload Seite fürs anonyme uploaden"
        ></Meta>
      }
      institute="htwr"
    >
      <HeadLine>Work in Progress</HeadLine>
      <h1>
        Server arbeit und so... soll ja auch sicher sein gegen path traversal
        und so
      </h1>

      <form>
        <label
          htmlFor="message"
          className="my-10 mb-2 block text-sm font-medium text-black"
        >
          Kommentar / Feedback
        </label>
        <textarea
          id="message"
          rows={5}
          className="block w-full rounded-lg border border-gray-300 bg-rwth-branding p-2.5 text-sm text-gray-900 placeholder:text-black/50 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Kommentar / Feedback"
        ></textarea>

        <div className="my-5 flex w-full items-center justify-center">
          <label
            htmlFor="dropzone-file"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-gray-300 bg-rwth-branding "
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-black/50"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-black/50">Klicken oder ziehen</p>
              <p className="text-xs text-black/50">Only PDF Max 25mb</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>

        <button
          type="submit"
          className="w-full cursor-not-allowed rounded-lg bg-rwth-branding px-4 py-2 transition-colors duration-100 hover:bg-rwth-warn hover:disabled:bg-rwth-warn2"
          disabled
        >
          Hochladen
        </button>
      </form>
    </Main>
  );
}
