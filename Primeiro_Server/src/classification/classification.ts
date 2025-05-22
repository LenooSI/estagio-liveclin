import { Request, Response } from "express";

type ConstructorStanding = {
  Constructor: {
    name: string;
    nationality: string;
  };
  position: string;
  wins: string;
  points: string;
};

export type ReturnListings = {
  nome: string;
  posicao: number;
  vitorias: number;
  pontos: number;
};

export async function driversClassification(request: Request, response: Response) {
  const minPoints = request.query.minPoints ? Number(request.query.minPoints) : 0;

  try {
    const driversClassificationResponse = await fetch(
      `https://ergast.com/api/f1/current/constructorStandings.json`,
      {
        headers: { "User-Agent": "Node.js" },
      }
    );
    const jsonDriversClassificationResponse =
      await driversClassificationResponse.json();

    const apiRawRanks =
      jsonDriversClassificationResponse.MRData.StandingsTable.StandingsLists[0]
        .ConstructorStandings;

    const mapper = (el: ConstructorStanding) => {
      return {
        nome: `${el.Constructor.name} da(e) ${el.Constructor.nationality}`,
        posicao: Number(el.position),
        vitorias: Number(el.wins),
        pontos: Number(el.points),
      };
    };

    const constructorRanks = apiRawRanks.map(mapper);

    const constructorRanks2 = [];

    for (let i = 0; i < apiRawRanks.length; i++) {
      const coco123 = apiRawRanks[i];
      constructorRanks2.push(mapper(coco123));
    }

    const filterByMinPoints = (el: ReturnListings) => el.pontos > minPoints;

    response.json({
      podio: constructorRanks.filter(filterByMinPoints),
      constructorRanks2: constructorRanks2.filter((el: ReturnListings) => el.pontos > minPoints),
    });
  } catch (error) {
    response
      .status(500)
      .json({ erro: "Não foi possível buscar o usuário do GitHub." });
  }
}

// { race: "GP da Austrália",
//     date: "19 de Março",
//     url:'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_771/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit',
//     primeiraEdicao: "1996", tempoRecorde: "1:19.813 (Charles Leclerc (2024)", maiorVencedor: "Michael Schumacher (4 vitórias)", comprimento: "5.303 km", numVoltas: 58},

// { race: "GP da China",
//     date: "23 de Março",
//     url:'https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit',
//     primeiraEdicao: "2004", tempoRecorde: "1:32.238 (Michael Schumacher (2004)", maiorVencedor: "Lewis Hamilton (6 vitórias)", comprimento: "5.451 km", numVoltas: 56},

// <td>1</td>
// <td>McLaren</td>
// <td>151</td>
// <td>3</td>
