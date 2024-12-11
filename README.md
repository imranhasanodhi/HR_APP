# Week 5

## Step 1.
1. Install `json-server` to create a mock backend:  
2. Create a `db.json` file and move the `personData` content into this file under a `persons` key.

## Step 2
1. Remove the static `personData` import from your project.  
2. Update your application to fetch the employee list dynamically from `http://localhost:3001/persons` using API calls.

## Step 3
1. Add functionality to create new employees by sending a `POST` request to `http://localhost:3001/persons`.  
2. Ensure that new employees are added to the list and persist in `db.json`.

## Step 4
1. Update the edit functionality in your employee card so that any changes are saved to `db.json`.  

## Step 5
1. Add a "See More" button on each employee card to navigate to a detailed view page.  
2. Adjust the employee card to show only basic details, with full details displayed on the detailed view page.  
3. Include a "Back to List" button on the detailed view page to return to the employees list.
