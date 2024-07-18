//import express, { Request, Response } from "express";
import connectToDatabase from "../../routes/index";
import { Homepage } from "../../models/articles/homepage";

const articlesHomepage = async (req, res) => {
  try {
    await connectToDatabase();

    const query = {};

    if (req.query.category) {
      query.category = req.query.category.toString();
    }

    if (req.query.position) {
      query.position = req.query.position.toString();
    }

    const homepages = await Homepage.find(query);
    res.send(homepages);
  } catch (error) {
    console.log(error);
  }
};

export default articlesHomepage;
