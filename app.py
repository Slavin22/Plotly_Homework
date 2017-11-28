# 0. Import Dependencies
import pandas as pd

# 1. Import Flask
from flask import Flask, jsonify

# 2. Create an app
app = Flask(__name__)

# 3. Define static routes
@app.route("/")
def homepage():
	print("Server received request for 'Home' page")
	return "Dashboard Homepage"

@app.route("/names")
def names():
	print("Server received request for 'Names' page")
	df = pd.read_csv("belly_button_biodiversity_samples.csv")
	df_list = list(df.columns.values)
	df_list.pop(0)
	return jsonify(df_list)

@app.route("/otu")
def otu():
	print("Server received request for 'OTU' page")
	df = pd.read_csv("belly_button_biodiversity_otu_id.csv")
	df_list = df["lowest_taxonomic_unit_found"].tolist()
	return jsonify(df_list)

@app.route("/metadata/<sample>")
def metadata(sample):
	print("Server received request for 'Metadata' page")
	sampleid = int(sample)
	df = pd.read_csv("Belly_Button_Biodiversity_Metadata.csv").set_index("SAMPLEID")
	row = df.loc[sampleid]
	age = int(row["AGE"])
	bbtype = row["BBTYPE"]
	ethnicity = row["ETHNICITY"]
	gender = row["GENDER"]
	location = row["LOCATION"]
	meta = {
				"age": age,
				"bbtype": bbtype,
				"ethnicity": ethnicity,
				"gender": gender,
				"location": location,
				"sampleid": sampleid
			}
	return jsonify(meta)

@app.route("/wfreq/<sample>")
def wfreq(sample):
	print("Server received request for 'WFReq' page")
	sampleid = int(sample)
	df = pd.read_csv("Belly_Button_Biodiversity_Metadata.csv").set_index("SAMPLEID")
	row = df.loc[sampleid]
	wfreq = int(row["WFREQ"])
	return str(wfreq)

@app.route("/samples/<sample>")
def samples(sample):
	print("Server received request for 'Samples' page")
	sampleid = "BB_" + str(sample)
	df = pd.read_csv("Belly_Button_Biodiversity_samples.csv").sort_values(sampleid, ascending=False)
	otu_list = df["otu_id"].tolist()
	value_list = df[sampleid].tolist()
	return jsonify({"otu_ids": otu_list, "sample_values": value_list})


# 4. Define main behavior
if __name__ == "__main__":
    pass
    app.run(debug=False)