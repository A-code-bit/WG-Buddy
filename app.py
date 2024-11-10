from flask import Flask, render_template, request, redirect, url_for
from flask_mysqldb import MySQL

app = Flask(__name__)

# Konfiguration der MySQL-Datenbank
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'  # MySQL-Benutzername
app.config['MYSQL_PASSWORD'] = 'toBi0105'  #  MySQL-Passwort
app.config['MYSQL_DB'] = 'wgbuddy' 

mysql = MySQL(app)

@app.route('/')
def index():
    return render_template('LoginPage.html')
@app.route
if __name__ == '__main__':
    app.run(debug=True)