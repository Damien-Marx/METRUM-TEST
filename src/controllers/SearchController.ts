//Import du module express pour avoir accès a REQ et RES
import { Request, Response } from 'express';
//Import du module fetch pour les requettes a l'API 
import fetch from 'node-fetch';

//export du retour du result la requet a l'API bassé sur la saisi utilisateur
export const searchSeries = async (req: Request, res: Response) => {
  const { query } = req.query;

  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const series = await response.json();

    res.json(series);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une horrible erreur' });
  }
};


