'use server'

import {promises as fs} from 'fs';

 
export async function convert(json: any) {
  try {
    fs.writeFile('./app/downloads/output.json', JSON.stringify(json), 'utf8');
  } catch (error) {
    console.error(error);
  }
} 