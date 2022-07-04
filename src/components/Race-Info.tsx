export function RaceInfo() {
  return (
    <div className="w-[650px] bg-gray-600 p-6 border-l border-gray-600">
      <img src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png.transform/9col/image.png" />
      <div className="py-10 px-3 flex items-between justify-between">
        <div className="flex flex-col-1">
          <div className="flex flex-row items-between justify-between">
            <div className="basis-1/6">
              <p className="text-xs p-1 font-medium text-gray-400">
                NUMBER OF LAPS
              </p>
            </div>
            <div className="basis-1/2 pl-2">
              <h2 className="text-4xl font-semibold">
                58
              </h2>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/6">
              <p className="text-xs p-1 font-medium text-gray-400">
                CIRCUIT LENGHT
              </p>
            </div>
            <div className="pl-2">
              <h2 className="text-4xl font-medium">
                5.303 <small  className="text-sm"> KM</small>
              </h2>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/6">
              <p className="text-xs p-1 font-medium text-gray-400">
                RACE DISTANCE
              </p>
            </div>
            <div className="pl-2">
              <h2 className="text-4xl font-semibold">
                307.574 <small className="text-sm"> KM</small>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6 py-4 px-3 flex items-between justify-between">
        <div className="w-full bg-gray-800 p-6 border-l border-gray-800 shadow">
          <strong className="mb-4">AUSTRIA</strong>
          <p className="mt-2 text-xs">The fearsome, original Osterreichring was originated in 1969 as a replacement for the Zeltweg airfield circuit. The track known today as the Red Bull Ring was more or less created over the winter of 1995-6, when Hermann Tilke was engaged to turn the Osterreichring into a shorter, more modern race track.</p>
          <p className="mt-2 text-xs">The A1-Ring, as it was then called, was opened in 1996, with Formula 1 arriving at the circuit a year later. Jacques Villeneuve won the race, while Jean Alesi had a spectacular crash when his Benetton climbed up the Ferrari of Eddie Irvine. Alesi’s team mate Gerhard Berger, meanwhile, used his home Grand Prix to announce his F1 retirement.</p>
        </div>
        <div className="basis-1/2 w-full bg-gray-800 p-6 border-l border-gray-800 shadow">
          <div className="flex flex-col">
            <p className="text-sm">WEATHER</p>
            <div className="text-center">
              <p className="py-5 text-sm">1</p>
            </div>
            <div>
              <p className="py-5 text-sm">2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}