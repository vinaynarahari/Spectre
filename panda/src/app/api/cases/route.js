import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'gridinfo.json');

export async function GET() {
  try {
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const data = JSON.parse(fileContents);
    return new Response(JSON.stringify(data.cases), { status: 200 });
  } catch (error) {
    return new Response('Failed to read data', { status: 500 });
  }
}

export async function POST(request) {
  try {
    const newCase = await request.json();
    
    // Read the existing data
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const data = JSON.parse(fileContents);

    // Add the new case to the existing array
    data.cases.push(newCase);

    // Save the updated data back to the JSON file
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    return new Response(JSON.stringify(newCase), { status: 201 });
  } catch (error) {
    return new Response('Failed to save data', { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const updatedCase = await request.json();
    const { id } = updatedCase;

    // Read the existing data
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const data = JSON.parse(fileContents);

    // Find and update the case
    const index = data.cases.findIndex((caseItem) => caseItem.id === id);
    if (index !== -1) {
      data.cases[index] = updatedCase;
      
      // Save the updated data back to the JSON file
      fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
      
      return new Response(JSON.stringify(updatedCase), { status: 200 });
    } else {
      return new Response('Case not found', { status: 404 });
    }
  } catch (error) {
    return new Response('Failed to update data', { status: 500 });
  }
}
