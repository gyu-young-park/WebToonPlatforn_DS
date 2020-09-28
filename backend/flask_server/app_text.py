import pytest
from app import app

@pytext.fixture
def client():
    return app.test_client()

def test_home(client):
    client = app.client()
    res = client.get('/')
    assert res.status_code == 200
    assert '{"text":"Hello"}' in str(res.data)
    #get /
    # http status code : 200
    # hello, world