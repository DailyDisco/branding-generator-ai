from fastapi import FastAPI, HTTPException
from description import generate_branding_snippet, generate_keywords
from mangum import Mangum

app = FastAPI()

# this wraps the api app in a handler function
handler = Mangum(app)

MAX_INPUT_LENGTH = 32

@app.get('/generate_snippet')
async def generate_snippet_api(prompt: str):
    validate_input_length(prompt)
    snippet = generate_branding_snippet(prompt)
    return {"snippet": snippet, "keywords": []}

@app.get('/generate_keywords')
async def generate_keywords_api(prompt: str):
    validate_input_length(prompt)
    keywords = generate_keywords(prompt)
    return {"snippet": None, "keywords": keywords}

@app.get('/generate_snippet_and_keywords')
async def generate_keywords_api(prompt: str):
    validate_input_length(prompt)
    snippet = generate_branding_snippet(prompt)
    keywords = generate_keywords(prompt)
    return {"snippet": snippet, "keywords": keywords}


# validates the length of the prompt and throws an error if it's too long
def validate_input_length(prompt: str):
    if len(prompt) >= MAX_INPUT_LENGTH:
        raise HTTPException(
            status_code=400,
            detail=f"Input must be less than {MAX_INPUT_LENGTH} characters.",
        )

#uvicorn description_api:app --reload