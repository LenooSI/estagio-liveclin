import { Request, Response } from "express";
import { writeToFile } from "../helpers/write-to-file";

type CircuitStanding = {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: {
    lat: string;
    long: string;
    locality: string;
    country: string;
  };
};
type CircuitMapped = {
  nome: string;
  localition: string;
};

export type ReturnListings = {
  circuitid: string;
  circuitName: string;
  Localition: {
    locality: string;
    country: string;
  };
};

export type RaceDescription = {
  race: string;
  date: string;
  url: string;
  primeiraEdicao: string;
  tempoRecorde: string;
  maiorVencedor: string;
  comprimento: string;
  numVoltas: number;
};

export type Practice = {
  date: string;
  time: string;
};

export type Schedule = {
  MRData: {
    series: string;
    RaceTable: {
      season: string;
      Races: {
        season: string;
        round: string;
        url: string;
        circuitName: string;
        Circuit: CircuitStanding;
        date: string;
        time: string;
        firstPractice: Practice;
        secondPractice: Practice;
        thirdPractice: Practice;
        qualifying: Practice;
      }[];
    };
  };
};

const mapper = (el: CircuitStanding): CircuitMapped => {
  return {
    nome: `${el.circuitName} da(e) ${el.Location.country}`,
    localition: String(el.Location.country),
  };
};

async function getCurrent(): Promise<Schedule> {
  const courrentResponse = await fetch(
    `https://ergast.com/api/f1/current.json`
  );

  const jsonCourrentResponse = await courrentResponse.json();
  return jsonCourrentResponse;
}

async function getCircuits() {
  const circuitDataResponse = await fetch(
    `https://ergast.com/api/f1/current/circuits.json`,
    {
      headers: { "User-Agent": "Node.js" },
    }
  );
  const jsonCircuitDataResponse = await circuitDataResponse.json();
  return jsonCircuitDataResponse;
}

async function createRaceDescription(
  schedules: Schedule
): Promise<RaceDescription[]> {
  console.log(schedules.MRData.RaceTable.Races);

  return schedules.MRData.RaceTable.Races.map((race) => {
    return {
      comprimento: "Desconhecido",
      date: `${race.date} - ${race.time}`,
      maiorVencedor: "Desconhecido",
      numVoltas: 0,
      primeiraEdicao: "Desconhecido",
      race: race.circuitName,
      tempoRecorde: "Desconhecido",
      url: `https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/${race.Circuit.Location.locality}_Circuit`,
    };
  });
}

export async function getCircuitData(request: Request, response: Response) {
  const nationality = request.query.nationality
    ? String(request.query.nationality)
    : "";

  try {
    const circuitData = await getCircuits();
    const currentSchedule = await getCurrent();
    const apiRawRanks = circuitData.MRData.CircuitTable.Circuits;
    const circuitRanks = apiRawRanks.map(mapper);

    function filterByCountry(circuit: CircuitMapped) {
      if (nationality === "") return true;
      return circuit.localition === nationality;
    }

    response.json({
      country: circuitRanks.filter(filterByCountry),
      retornoFront: await createRaceDescription(currentSchedule),
    });
  } catch (error) {
    console.log(error);
    response.status(500).json({ erro: "Não foi possível buscar o Circuito." });
  }
}
