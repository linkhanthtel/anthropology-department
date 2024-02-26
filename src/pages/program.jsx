
export default function Program() {
  return (
    <div>
      <div className="px-4 my-5 sm:px-0">
        <h1 className="text-base font-semibold leading-7 text-center text-gray-900">Course Information</h1>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Course details and information</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">B.A</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">First Year, Second Year, Third Year, Final Year</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">B.A (Hons)</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">First Year, Second Year, First Year (Hons), Second Year (Hons), Third Year (Hons)</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">M.A</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">M.A (First Year), M.A (Second Year)</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Ph. D</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">GRADUATE COURSES FOR Ph. D. IN ANTHROPOLOGY <br />
            Total Credits = 16 per week <br />
            Total Hours   = 28 per week</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Post-graduate Diploma</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            COURSES FOR DIPLOMA IN ANTHROPOLOGY <br />
            Total Credits = 16 per week <br />
            Total Hours =   20 per week
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
