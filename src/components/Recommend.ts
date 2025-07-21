let LSW_recommend_res = await fetch("https://raw.githubusercontent.com/Mr-Ojii/L-SMASH-Works-Auto-Builds/refs/heads/master/recommend.txt");
let LSW_recommend_data = await LSW_recommend_res.text();

export { LSW_recommend_data };
