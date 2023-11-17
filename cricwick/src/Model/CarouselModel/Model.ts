type T_InningData = {
	batting_team_id: number;
	fielding_team_id: number;
	id: number;
	overs: number;
	required_rate: string;
	run_rate: string;
	runs: number;
	summary: {
		batsman_1: {
			balls_played: number,
			name: string,
			runs_scored: number,
			string_state: string
		},
		batsman_2: {
			balls_played: number,
			name: string,
			runs_scored: number,
			string_state: string
		},
		bowler: {
			name: string,
			overs_bowled: string,
			overs_maiden: number,
			runs_given: number,
			wickets_taken: number
		}
	}; // Change this to the actual type of summary if known
	total_overs: number;
	wickets: number;
}

type T_MatchData = {
	break_type: string;
	chose_to: string;
	format: string;
	id: number;
	is_alternate_stream_url: boolean;
	live_match_state: string;
	match_result: string;
	match_start: string;
	match_state: string;
	series: {
		id: number;
		title: string;
	};
	teamA: {
		color_hex: string;
		flag_url: string;
		id: number;
		name: string;
		short_name: string;
	};
	teamB: {
		color_hex: string;
		flag_url: string;
		id: number;
		name: string;
		short_name: string;
	};
	team_1_id: number;
	team_2_id: number;
	title: string;
	toss_won_by_id: number;
	venue: {
		id: number;
		stadium_name: string;
		title: string;
	};
}


const CarouselData = (matchData: T_MatchData, inningData: T_InningData): T_MatchData & { inning: T_InningData } => {
	return {
		...matchData,
		inning: inningData
	}
};
export {CarouselData}
