from flask import Flask, request, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    """Show index page."""

    return render_template('index.html')


@app.route('/api/profile', methods=['POST'])
def profile():
    """Return results from profile form."""

    fullname = request.form['name']
    age = 'replace me'
    occupation = 'replace me'

    # (pretend there's code to add the customer to the
    # database... we'll learn about that next week!)

    return jsonify({'fullname': fullname,
                    'age': age,
                    'occupation': occupation})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
