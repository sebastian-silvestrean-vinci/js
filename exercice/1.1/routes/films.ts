import { Router } from "express";
import { Film } from "../types";

const films:Film[] = [

     {
        id:1,
        title:"la desastreuse vie de sohib",
        director:"sohib",
        duration:179520,
      
        
     },

     {
        id:2,
        title:"le h a la tete de b",
        director:"miha",
        duration:15,
       
        
    },
     {
        id:3,
        title:"tintin",
        director:"sohib",
        duration:185,
        
        
     },

    ];
    const router = Router();

router.get("/", (_req, res) => {
  return res.json(films);
});

export default router;
