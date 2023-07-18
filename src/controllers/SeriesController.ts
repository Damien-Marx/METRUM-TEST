//Import du module express pour avec accès a REQ et RES
import { Request, Response } from 'express';
//Import du module fetch pour les requette a l'API 
import fetch from 'node-fetch';



//export des données des infos de la serie en fonction de l'ID 
export const getSeriesDetails = async (req: Request, res: Response) => {
  const { seriesId } = req.params;

  try {
    const response = await fetch(` https://api.tvmaze.com/shows/${seriesId}`);
    const seriesDetails = await response.json();

    res.json(seriesDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une horrible erreur' });
  }
};
