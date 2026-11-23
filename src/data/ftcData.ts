export type Locale = 'ko' | 'en' | 'zh';

export interface SectionTab {
  id: string;
  label: string;
  shortLabel: string;
}

export interface FleetItem {
  id: string;
  model: string;
  category: string;
  count: string;
  countNum: number;
  engine: string;
  avionics: string;
  cruiseSpeed: string;
  range: string;
  fuel: string;
  role: string;
  image: string;
  imageAlt: string;
}

export interface FacilityBase {
  id: string;
  code: string;
  name: string;
  role: string;
  address: string;
  runwayDim: string;
  runwayHeading: string;
  navaids: string;
  highlights: string[];
}

export interface SimulatorItem {
  id: string;
  name: string;
  certification: string;
  platform: string;
  creditHours: string;
  capabilities: string[];
}

export interface TrainingStage {
  step: string;
  code: string;
  title: string;
  aircraft: string;
  hours: string;
  summary: string;
  outcomes: string[];
}

export interface OperatingAirport {
  icao: string;
  name: string;
  type: 'base' | 'cross-country';
  runway: string;
  flightTimeFromMuan: string;
  trainingFocus: string;
}

export interface OrganizationUnit {
  role: string;
  headcount: string;
  responsibility: string;
  qualification: string;
}

export interface CapacityMetric {
  label: string;
  value: string;
  unit: string;
  context: string;
}

export interface LocaleContent {
  header: {
    brand: string;
    navLinks: { id: string; label: string }[];
    ctaLabel: string;
  };
  hero: {
    institutionLine: string;
    domainTag: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    officialSitePrefix: string;
    officialSiteLabel: string;
    kpis: { value: string; label: string; sub: string }[];
  };
  sectionTabs: SectionTab[];
  overview: {
    heading: string;
    lead: string;
    establishedLabel: string;
    establishedValue: string;
    authorityLabel: string;
    authorityValue: string;
    portalLabel: string;
    portalValue: string;
    officialDirectLabel: string;
    bases: {
      code: string;
      name: string;
      tag: string;
      address: string;
      description: string;
    }[];
  };
  fleet: {
    heading: string;
    lead: string;
    totalSummary: string;
    specLabels: {
      count: string;
      engine: string;
      avionics: string;
      cruise: string;
      range: string;
      fuel: string;
      role: string;
    };
    items: FleetItem[];
  };
  facilities: {
    heading: string;
    lead: string;
    imageCaption: string;
    tableHeaders: {
      airport: string;
      runway: string;
      dimensions: string;
      navaids: string;
    };
    bases: FacilityBase[];
    supportSpacesTitle: string;
    supportSpaces: { title: string; detail: string }[];
  };
  simulators: {
    heading: string;
    lead: string;
    imageCaption: string;
    certLabel: string;
    platformLabel: string;
    creditLabel: string;
    items: SimulatorItem[];
  };
  curriculum: {
    heading: string;
    lead: string;
    aircraftLabel: string;
    hoursLabel: string;
    stages: TrainingStage[];
  };
  airports: {
    heading: string;
    lead: string;
    filterAll: string;
    filterBase: string;
    filterXc: string;
    tableHeaders: {
      icao: string;
      airport: string;
      runway: string;
      time: string;
      focus: string;
    };
    airports: OperatingAirport[];
    environmentPoints: { title: string; desc: string }[];
  };
  staff: {
    heading: string;
    lead: string;
    units: OrganizationUnit[];
  };
  capacity: {
    heading: string;
    lead: string;
    metrics: CapacityMetric[];
    cohortBreakdownTitle: string;
    cohorts: { group: string; base: string; focus: string; volume: string }[];
  };
  footer: {
    brandTitle: string;
    portalText: string;
    officialLinkLabel: string;
    cheongjuAddr: string;
    muanAddr: string;
    tel: string;
    copyright: string;
  };
}

export const IMAGES = {
  heroDa40: '/src/assets/images/hero_da40_apron_1795428010328.jpg',
  fleetDa42: '/src/assets/images/fleet_da42_twin_1795428010769.jpg',
  ftdSimulator: '/src/assets/images/ftd_simulator_cockpit_1795428011017.jpg',
  muanRunway: '/src/assets/images/muan_runway_hangar_1795428010808.jpg',
};

export const OFFICIAL_CJU_URL = 'https://www.cju.ac.kr/043dic/index.do';
export const PORTAL_DOMAIN = 'cflight-training.ac.kr';

export const CONTENT: Record<Locale, LocaleContent> = {
  ko: {
    header: {
      brand: 'FTC Cheongju',
      navLinks: [
        { id: 'overview', label: '교육원 개요' },
        { id: 'fleet', label: '보유 항공기' },
        { id: 'facilities', label: '시설·활주로' },
        { id: 'curriculum', label: '운영과정' },
      ],
      ctaLabel: '청주대학교 비행교육원 ↗',
    },
    hero: {
      institutionLine: 'Cheongju University Flight Training Center · 국토교통부 지정 전문교육기관',
      domainTag: 'cflight-training.ac.kr',
      title: '청주대학교 비행교육원',
      subtitle:
        '청주국제공항(RKTU)과 무안국제공항(RKJB) 듀얼 거점을 기반으로 최신 Diamond DA-40NG·DA-42VI 항공기와 가급 FTD 시뮬레이터를 운용하는 항공사 맞춤형 정예 조종사 양성 기관입니다.',
      primaryCta: '핵심 현황 살펴보기',
      secondaryCta: '청주대학교 비행교육원 바로가기',
      officialSitePrefix: '공식 홈페이지 직접 연결',
      officialSiteLabel: '청주대학교 비행교육원 (cju.ac.kr/043dic)',
      kpis: [
        { value: '9대', label: '보유 항공기', sub: 'DA-40NG 8대 · DA-42VI 1대' },
        { value: '2개 공항', label: '이원화 비행거점', sub: '청주(RKTU) · 무안(RKJB)' },
        { value: '2,800m', label: '무안 분원 활주로', sub: 'ILS CAT-I/II 정밀접근 지원' },
        { value: '120명+', label: '비행실습 재원 규모', sub: '연간 6,000+ 비행시간 역량' },
      ],
    },
    sectionTabs: [
      { id: 'overview', label: '01. 개요·위치', shortLabel: '개요·위치' },
      { id: 'fleet', label: '02. 보유 항공기', shortLabel: '항공기' },
      { id: 'facilities', label: '03. 시설·활주로', shortLabel: '시설·활주로' },
      { id: 'simulators', label: '04. 시뮬레이터', shortLabel: '시뮬레이터' },
      { id: 'curriculum', label: '05. 운영과정', shortLabel: '운영과정' },
      { id: 'airports', label: '06. 운항공항·환경', shortLabel: '운항환경' },
      { id: 'staff', label: '07. 교관·직원', shortLabel: '교관·직원' },
      { id: 'capacity', label: '08. 교육규모·능력', shortLabel: '교육규모' },
    ],
    overview: {
      heading: '01. 비행교육원 개요 및 위치',
      lead: '2013년 설립된 청주대학교 비행교육원은 대학 직영 비행훈련 체계를 갖추고, 학사 학위 과정과 연계된 표준 운항절차(SOP) 중심의 조종사 양성 교육을 수행합니다.',
      establishedLabel: '설립 및 인가',
      establishedValue: '2013년 개원 · 국토교통부 지정 전문교육기관(ATO)',
      authorityLabel: '운영 거점',
      authorityValue: '청주 본원(청주국제공항) & 무안 분원(무안국제공항)',
      portalLabel: '대표 도메인',
      portalValue: 'cflight-training.ac.kr',
      officialDirectLabel: '청주대학교 비행교육원',
      bases: [
        {
          code: 'RKTU · 본원',
          name: '청주 본원 (청주대학교 · 청주국제공항)',
          tag: '학술·초기비행·시뮬레이터 거점',
          address: '충청북도 청주시 청원구 대성로 298 (청주대학교 항공대학) / 청주국제공항 비행실습장',
          description:
            '항공운항학 이론 교육과 모의비행훈련장치(FTD) 사전 실습을 수행하며, 3학년 자가용(PPL) 초기 비행 훈련이 진행되는 핵심 캠퍼스 거점입니다.',
        },
        {
          code: 'RKJB · 분원',
          name: '무안 분원 (무안국제공항 비행훈련원)',
          tag: '심화비행·계기·사업용·다발 거점',
          address: '전라남도 무안군 망운면 공항로 970-130 (무안국제공항 내)',
          description:
            '민항기 교통 혼잡도가 낮고 국제공항급 활주로·항행안전시설을 갖춘 무안국제공항 내에 전용 격납고와 브리핑동을 구축하여 4학년 계기·사업용·다발 심화 훈련을 집중 수행합니다.',
        },
      ],
    },
    fleet: {
      heading: '02. 보유 항공기 기종 및 대수',
      lead: '전 기종을 오스트리아 Diamond사의 첨단 탄소복합소재 항공기와 Garmin G1000 NXi 디지털 글라스 콕핏으로 통일하여 민항기 전환 적응력을 극대화했습니다.',
      totalSummary: '총 보유 대수 9대 · Jet-A1 디젤 엔진 · 전 기종 Garmin G1000 NXi 통합 전자계기 탑재',
      specLabels: {
        count: '보유 대수',
        engine: '엔진 / 연료',
        avionics: '항공전자계기',
        cruise: '순항 속도',
        range: '최대 항속거리',
        fuel: '연료 체계',
        role: '주요 투입 과정',
      },
      items: [
        {
          id: 'da40ng',
          model: 'Diamond DA-40NG',
          category: '단발 훈련기 (Single-Engine)',
          count: '8대',
          countNum: 8,
          engine: 'Austro Engine AE300 (168 hp 터보 디젤)',
          avionics: 'Garmin G1000 NXi + GFC700 자동조종장치',
          cruiseSpeed: '154 KTAS (약 285 km/h)',
          range: '1,341 km (724 NM)',
          fuel: 'Jet-A1 항공유 (단일 레버 FADEC 제어)',
          role: '자가용(PPL) · 계기한정(IR) · 사업용(CPL) 주력 기종',
          image: IMAGES.heroDa40,
          imageAlt: '청주대학교 비행교육원 주력 단발 훈련기 Diamond DA-40NG',
        },
        {
          id: 'da42vi',
          model: 'Diamond DA-42VI',
          category: '쌍발 훈련기 (Multi-Engine)',
          count: '1대',
          countNum: 1,
          engine: 'Twin Austro Engine AE300 (2 × 168 hp)',
          avionics: 'Garmin G1000 NXi · 기상레이더 · TKS 제빙장치',
          cruiseSpeed: '197 KTAS (약 365 km/h)',
          range: '2,250 km (1,215 NM)',
          fuel: 'Jet-A1 항공유 (FADEC 디지털 제어)',
          role: '다발한정(ME) · 사업용 쌍발 과정 · 민항 진출 대비',
          image: IMAGES.fleetDa42,
          imageAlt: '청주대학교 비행교육원 쌍발 훈련기 Diamond DA-42VI',
        },
      ],
    },
    facilities: {
      heading: '03. 비행교육 시설 및 활주로',
      lead: '군·민 겸용 국제공항인 청주공항과 서남권 거점 무안국제공항의 대형 활주로 인프라를 활용하여 실전 여객기 운항과 동일한 공항 환경에서 훈련합니다.',
      imageCaption: '무안국제공항 비행교육원 전용 격납고 및 국제선 규격 활주로 전경',
      tableHeaders: {
        airport: '훈련 공항',
        runway: '활주로 방향',
        dimensions: '길이 × 폭 / 포장',
        navaids: '항행안전 및 접근시설',
      },
      bases: [
        {
          id: 'rkjb',
          code: 'RKJB',
          name: '무안국제공항 (무안 분원)',
          role: '전용 격납고 · 주 훈련 활주로',
          address: '전라남도 무안군 망운면',
          runwayDim: '2,800 m × 45 m (아스팔트)',
          runwayHeading: 'RWY 01 / 19',
          navaids: 'ILS CAT-I/II · VOR/DME · PAPI · RNP 접근',
          highlights: ['전용 격납고 및 주기장 확보', '낮은 민항 트래픽으로 연속 장주·계기훈련 최적화'],
        },
        {
          id: 'rktu',
          code: 'RKTU',
          name: '청주국제공항 (청주 본원)',
          role: '복수 활주로 · 중부권 훈련 거점',
          address: '충청북도 청주시 청원구',
          runwayDim: '2,744 m × 60 m / 45 m',
          runwayHeading: 'RWY 06R/24L · 06L/24R',
          navaids: 'ILS CAT-I · TACAN · VOR/DME · 관제 레이더',
          highlights: ['복수 활주로 환경에서의 공역 관제 절차 숙달', '본교 항공대학 강의동과 직결된 이론-실습 연계'],
        },
      ],
      supportSpacesTitle: '비행교육원 주요 지원 시설',
      supportSpaces: [
        {
          title: '전용 항공기 격납고 및 정비고',
          detail: 'DA-40NG 및 DA-42VI 동시 수용이 가능한 격납 공간과 정시점검·엔진 정비를 수행하는 전용 정비 베이 운영',
        },
        {
          title: '비행 브리핑 및 디브리핑실',
          detail: '비행 전·후 기상, NOTAM, 항로 및 비행자료(G1000 SD카드 Flight Data) 기반 1:1 교관 디브리핑 공간',
        },
        {
          title: '운항통제 및 기상관측실',
          detail: '실시간 항공기 위치 추적, 비행계획(Flight Plan) 접수 및 국내 공항 기상 레이더 통합 모니터링',
        },
        {
          title: '교육생 자율학습실 및 휴게라운지',
          detail: '장거리·야간 비행 대기 중 절차 예행연습(Chair Flying)과 체력 회복이 가능한 전용 학습 공간',
        },
      ],
    },
    simulators: {
      heading: '04. 교육장비 및 시뮬레이터',
      lead: '국토교통부 인증 모의비행훈련장치(FTD)를 통해 악기상, 엔진 고장, 계기 접근 등 실비행에서 구현하기 어려운 비상절차를 안전하고 반복적으로 숙달합니다.',
      imageCaption: 'Garmin G1000 NXi 글라스 콕핏이 구현된 모의비행훈련장치(FTD) 실습 환경',
      certLabel: '인증 등급',
      platformLabel: '구현 기종 및 시스템',
      creditLabel: '인정 비행시간',
      items: [
        {
          id: 'ftd-da40',
          name: 'DA-40NG 모의비행훈련장치 (FTD)',
          certification: '국토교통부 "가"급 모의비행훈련장치 인증',
          platform: 'Diamond DA-40NG 실제 조종석 1:1 재현 · Garmin G1000 NXi · 180° 곡면 영상',
          creditHours: '자가용(PPL)·계기(IR)·사업용(CPL) 법정 비행시간 최대치 인정',
          capabilities: [
            '국내 주요 국제공항(청주·무안·제주·김포) 정밀 지형·활주로 데이터베이스 탑재',
            '엔진 정지, 전기계통 이상, 계기 고장 및 저시정(CAT-I/II) 상황 실시간 시나리오 부여',
            '교관 통제실(IOS)을 통한 비행 경로 기록 및 정밀 접근 오차 분석',
          ],
        },
        {
          id: 'ftd-multi',
          name: '다발항공기 및 계기절차 훈련장비',
          certification: '계기비행 및 다발 비대칭 추력 절차 훈련용',
          platform: 'Twin-Engine DA-42 계기 배열 호환 · G1000 NXi 항전 시뮬레이션',
          creditHours: '다발한정(ME) 및 계기절차(IFR) 사전 지상훈련 필수 연동',
          capabilities: [
            '단발 엔진 부작동(OEI) 시 요(Yaw) 제어 및 최소조종속도(Vmc) 절차 숙달',
            '홀딩(Holding), SID/STAR 표준 계기출발·도착 및 PBN/RNP 접근 절차 반복 훈련',
          ],
        },
        {
          id: 'g1000-station',
          name: 'Garmin G1000 NXi 항공전자 실습 스테이션',
          certification: '항공운항과·비행교육원 공통 항전 교육 장비',
          platform: 'PFD/MFD 듀얼 디스플레이 데스크탑 트레이너 다수 구비',
          creditHours: '비행 전 항법·비행계획 입력 및 FMS 운용 지상 교육',
          capabilities: [
            '비행계획(FPL), VNAV 수직항법, RNAV(GPS) 접근 페이지 조작 숙달',
            '실제 비행 탑승 전 항전 조작 부하(Workload) 최소화',
          ],
        },
      ],
    },
    curriculum: {
      heading: '05. 비행교육 운영과정',
      lead: '불필요한 행정적 복잡성을 배제하고, 민간 항공사 부기장 입사에 직결되는 4단계 표준 조종사 자격 취득 로드맵으로 운영합니다.',
      aircraftLabel: '운용 기종',
      hoursLabel: '핵심 훈련 구성',
      stages: [
        {
          step: '01',
          code: 'PPL',
          title: '자가용 조종사 과정',
          aircraft: 'DA-40NG + FTD',
          hours: '실비행 40시간+ · 시뮬레이터 5시간',
          summary: '비행 원리 이해부터 단독 비행(Solo), 기본 시계비행(VFR) 항법까지 조종사의 기초 기량을 완성합니다.',
          outcomes: ['기본 공중조작 및 이·착륙', '첫 단독 비행(First Solo)', '시계비행 야외항법(Cross-Country)'],
        },
        {
          step: '02',
          code: 'IR',
          title: '계기비행 한정 과정',
          aircraft: 'DA-40NG + 가급 FTD',
          hours: '계기비행 40시간 (FTD 연계)',
          summary: '외부 시계 참조 없이 항공전자 계기만을 이용하여 구름 속·악기상 환경에서 정밀 접근하는 능력을 배양합니다.',
          outcomes: ['VOR·ILS·RNAV 정밀/비정밀 접근', 'SID/STAR 계기항로 비행', '비정상자세 회복 및 비상계기 절차'],
        },
        {
          step: '03',
          code: 'CPL',
          title: '사업용 조종사 과정',
          aircraft: 'DA-40NG + DA-42VI',
          hours: '총 150~200시간 누적 기준',
          summary: '정밀 기동, 야간 비행, 장거리 공항 간 항법을 통해 항공사 수준의 정밀도와 안전 판단력을 확보합니다.',
          outcomes: ['고난도 상업용 정밀 기동', '야간 이·착륙 및 야외비행', '복잡 공역 내 CRM 및 의사결정'],
        },
        {
          step: '04',
          code: 'ME · CFI',
          title: '다발한정 · 조종교육증명',
          aircraft: 'Diamond DA-42VI',
          hours: '쌍발 10시간+ / 교관과정 별도',
          summary: '쌍발 항공기 운용 자격을 취득하고, 우수 수료생은 조종교육증명(CFI)을 취득해 교관으로 경력을 축적합니다.',
          outcomes: ['쌍발 단발엔진 부작동(OEI) 제어', '제빙·기상레이더 운용', '교관 채용 및 비행시간(Time-Building) 연계'],
        },
      ],
    },
    airports: {
      heading: '06. 주요 운항공항 및 비행훈련 환경',
      lead: '청주·무안 기지 공항을 중심으로 제주, 양양, 여수, 김포, 사천 등 국내 주요 공항을 연결하는 입체적 야외비행(Cross-Country) 훈련망을 가동합니다.',
      filterAll: '전체 운항 공항',
      filterBase: '훈련 거점 공항',
      filterXc: '주요 야외비행 공항',
      tableHeaders: {
        icao: 'ICAO',
        airport: '공항명 및 구분',
        runway: '활주로 규모',
        time: '무안 기준 비행시간',
        focus: '주요 훈련 목적',
      },
      airports: [
        {
          icao: 'RKJB',
          name: '무안국제공항 (주 훈련 분원)',
          type: 'base',
          runway: '2,800m × 45m',
          flightTimeFromMuan: 'Home Base',
          trainingFocus: '장주·계기접근(ILS)·야간·다발 집중 훈련',
        },
        {
          icao: 'RKTU',
          name: '청주국제공항 (본원 기지)',
          type: 'base',
          runway: '2,744m × 60m / 45m',
          flightTimeFromMuan: '약 50분',
          trainingFocus: '3학년 초기 PPL 및 군·민 공용 공역 관제 훈련',
        },
        {
          icao: 'RKPC',
          name: '제주국제공항',
          type: 'cross-country',
          runway: '3,180m × 45m',
          flightTimeFromMuan: '약 45분',
          trainingFocus: '해상 비행·측풍 착륙·고밀도 국제선 트래픽 적응',
        },
        {
          icao: 'RKNY',
          name: '양양국제공항',
          type: 'cross-country',
          runway: '2,500m × 45m',
          flightTimeFromMuan: '약 1시간 35분',
          trainingFocus: '장거리 태백산맥 횡단 항법 및 동해안 기상 대응',
        },
        {
          icao: 'RKJY',
          name: '여수공항',
          type: 'cross-country',
          runway: '2,100m × 45m',
          flightTimeFromMuan: '약 25분',
          trainingFocus: '남해안 연안 지형지물 항법 및 단거리 계기접근',
        },
        {
          icao: 'RKPS',
          name: '사천공항',
          type: 'cross-country',
          runway: '2,743m × 45m',
          flightTimeFromMuan: '약 35분',
          trainingFocus: '다목적 공역 접근 및 교차 야외비행(Cross-Country)',
        },
      ],
      environmentPoints: [
        {
          title: '낮은 공항 혼잡도와 높은 출격 효율',
          desc: '무안국제공항 거점은 정기 여객편 간섭이 적어 이륙 대기 시간 없이 하루 최대 소티(Sortie) 훈련 회전율을 유지합니다.',
        },
        {
          title: '사계절·해안·산악 복합 기상 환경',
          desc: '서해안 해풍과 내륙 산악 지형을 동시에 경험하며 실제 항공사 운항과 유사한 기상 판단력을 체득합니다.',
        },
        {
          title: '대형 관제권 및 계기항로 실전 적응',
          desc: '청주·제주 등 대형 관제권(Approach Control) 진입 절차를 반복 수행하여 조종사 무선통신(RT)과 공역 감각을 높입니다.',
        },
      ],
    },
    staff: {
      heading: '07. 직원 및 비행교관 구성',
      lead: '공군·민간항공사 출신의 베테랑 수석교관과 체계적인 교관 양성 트랙을 거친 전문 비행교관단, 공인 정비사, 운항관리 전담 인력이 안전을 책임집니다.',
      units: [
        {
          role: '비행교육원장 및 수석비행교관',
          headcount: '총괄 지휘부',
          responsibility: '교육원 전체 안전관리시스템(SMS) 총괄, 국토교통부 표준 교범 관리 및 단계별 비행 기량 심사(Checkride)',
          qualification: '운송용/사업용 조종사 · 수석교관 경력 보유',
        },
        {
          role: '전임 비행교관단 (CFI / CFII / MEI)',
          headcount: '15 ~ 20명 내외 탄력 편제',
          responsibility: 'PPL·IR·CPL·ME 실비행 및 FTD 시뮬레이터 1:1 전담 지도, 비행 전·후 안전 브리핑 수행',
          qualification: '공군 조종사·민항 기장 출신 및 본원 양성 우수 교관',
        },
        {
          role: '항공정비 전담팀',
          headcount: '공인 항공정비사 상주',
          responsibility: 'DA-40NG·DA-42VI 50/100시간 정시점검, Austro 디젤엔진 및 G1000 항전장비 감항성 유지',
          qualification: '국토교통부 항공정비사 자격 및 Diamond 기종 교육 이수',
        },
        {
          role: '운항통제 및 교육지원 행정',
          headcount: '청주·무안 상주 스태프',
          responsibility: '일일 비행 스케줄 배정, 항공기 위치 모니터링, NOTAM·기상 정보 제공 및 교육생 안전 관리',
          qualification: '운항관리·항공안전 행정 전문 인력',
        },
      ],
    },
    capacity: {
      heading: '08. 교육생 규모 및 연간 교육능력',
      lead: '청주대학교 항공운항학과 입학 정원과 연계된 계획적 배정 시스템으로 과밀 대기 없이 적기 졸업을 지원합니다.',
      metrics: [
        {
          label: '항공운항학과 연간 입학 정원',
          value: '36 ~ 40명',
          unit: '학년당',
          context: '체계적 소수 정예 선발 및 학년별 단계 진급',
        },
        {
          label: '상시 비행실습 재원 규모',
          value: '120명+',
          unit: '3·4학년 및 과정생',
          context: '청주 본원(초기) + 무안 분원(심화) 분산 배정',
        },
        {
          label: '연간 실비행 교육 역량',
          value: '6,000시간+',
          unit: '연간 총 비행시간',
          context: 'DA-40NG 8대 + DA-42VI 1대 고가동률 운용 기준',
        },
        {
          label: '교관 대 교육생 지도 비율',
          value: '1 : 4 ~ 5',
          unit: '맞춤형 멘토링',
          context: '1인당 평균 주 3~4회 비행 및 2,500+ FTD 시간 병행',
        },
      ],
      cohortBreakdownTitle: '학년·과정별 훈련 분산 체계',
      cohorts: [
        {
          group: '3학년 비행입문반',
          base: '청주 본원 (RKTU)',
          focus: '항공역학·항법 이론 + FTD 사전훈련 + PPL 자가용 과정',
          volume: '약 36~40명',
        },
        {
          group: '4학년 심화전공반',
          base: '무안 분원 (RKJB)',
          focus: '계기한정(IR) + 사업용 조종사(CPL) + 다발한정(ME)',
          volume: '약 36~40명',
        },
        {
          group: '조종교관 및 자격전환 과정',
          base: '청주 · 무안 통합',
          focus: '조종교육증명(CFI) 취득 및 항공사 입사 대비 시간 축적',
          volume: '수시 선발',
        },
      ],
    },
    footer: {
      brandTitle: '청주대학교 비행교육원 · Cheongju University Flight Training Center',
      portalText: '웹사이트 대표 주소: cflight-training.ac.kr',
      officialLinkLabel: '청주대학교 비행교육원 공식 홈페이지 바로가기 (https://www.cju.ac.kr/043dic/index.do)',
      cheongjuAddr: '청주 본원: 충청북도 청주시 청원구 대성로 298 (청주대학교) · 청주국제공항',
      muanAddr: '무안 분원: 전라남도 무안군 망운면 공항로 970-130 (무안국제공항 내)',
      tel: '대표 안내: 043-229-8114',
      copyright: '© Cheongju University Flight Training Center (ftc cheongju). Institutional Overview.',
    },
  },
  en: {
    header: {
      brand: 'FTC Cheongju',
      navLinks: [
        { id: 'overview', label: 'Overview' },
        { id: 'fleet', label: 'Fleet' },
        { id: 'facilities', label: 'Facilities' },
        { id: 'curriculum', label: 'Curriculum' },
      ],
      ctaLabel: 'CJU FTC Official ↗',
    },
    hero: {
      institutionLine: 'Cheongju University Flight Training Center · MOLIT Approved Training Organization',
      domainTag: 'cflight-training.ac.kr',
      title: 'Cheongju University Flight Training Center',
      subtitle:
        'Operating from dual international airport hubs at Cheongju (RKTU) and Muan (RKJB) with a unified Diamond DA-40NG & DA-42VI glass-cockpit fleet and Class-A FTD simulators to train airline-ready commercial pilots.',
      primaryCta: 'Explore Key Facts',
      secondaryCta: 'CJU FTC Official Site',
      officialSitePrefix: 'Direct Official Portal Link',
      officialSiteLabel: 'Cheongju University FTC (cju.ac.kr/043dic)',
      kpis: [
        { value: '9 Aircraft', label: 'Training Fleet', sub: '8 × DA-40NG · 1 × DA-42VI' },
        { value: '2 Airports', label: 'Dual Training Hubs', sub: 'Cheongju (RKTU) · Muan (RKJB)' },
        { value: '2,800 m', label: 'Muan Primary Runway', sub: 'ILS CAT-I/II Precision Approach' },
        { value: '120+ Cadets', label: 'Active Trainees', sub: '6,000+ Annual Flight Hours' },
      ],
    },
    sectionTabs: [
      { id: 'overview', label: '01. Overview & Hubs', shortLabel: 'Overview' },
      { id: 'fleet', label: '02. Fleet', shortLabel: 'Fleet' },
      { id: 'facilities', label: '03. Runways & Facilities', shortLabel: 'Runways' },
      { id: 'simulators', label: '04. Simulators', shortLabel: 'Simulators' },
      { id: 'curriculum', label: '05. Programs', shortLabel: 'Programs' },
      { id: 'airports', label: '06. Airports & Airspace', shortLabel: 'Airports' },
      { id: 'staff', label: '07. Instructors & Staff', shortLabel: 'Instructors' },
      { id: 'capacity', label: '08. Scale & Capacity', shortLabel: 'Capacity' },
    ],
    overview: {
      heading: '01. Overview & Training Locations',
      lead: 'Established in 2013, Cheongju University Flight Training Center runs an integrated university-operated flight academy aligned with airline Standard Operating Procedures (SOP).',
      establishedLabel: 'Founded & Certified',
      establishedValue: 'Established 2013 · MOLIT Approved Training Organization (ATO)',
      authorityLabel: 'Operational Bases',
      authorityValue: 'Cheongju Main Base (RKTU) & Muan Branch (RKJB)',
      portalLabel: 'Portal Address',
      portalValue: 'cflight-training.ac.kr',
      officialDirectLabel: 'Cheongju University FTC',
      bases: [
        {
          code: 'RKTU · Main',
          name: 'Cheongju Main Base (Cheongju Univ. & RKTU)',
          tag: 'Ground School · Simulators · Initial Flight',
          address: '298 Daeseong-ro, Cheongwon-gu, Cheongju-si, Chungbuk / Cheongju Int’l Airport',
          description:
            'Hosts academic aviation courses, pre-flight FTD simulator labs, and 3rd-year Private Pilot License (PPL) initial flight training adjacent to the university campus.',
        },
        {
          code: 'RKJB · Branch',
          name: 'Muan Branch (Muan International Airport)',
          tag: 'Instrument · Commercial · Multi-Engine Hub',
          address: '970-130 Gonghang-ro, Mangun-myeon, Muan-gun, Jeonnam (Muan Int’l Airport)',
          description:
            'Dedicated hangar and briefing complex inside low-congestion Muan International Airport, supporting high-sortie 4th-year Instrument, Commercial, and Multi-Engine operations.',
        },
      ],
    },
    fleet: {
      heading: '02. Aircraft Fleet & Composition',
      lead: 'Standardized around Austrian Diamond composite airframes and Garmin G1000 NXi digital glass cockpits for seamless transition into modern jet airliners.',
      totalSummary: 'Total 9 Aircraft · Jet-A1 Austro Diesel Engines · 100% Garmin G1000 NXi Glass Cockpit',
      specLabels: {
        count: 'Fleet Count',
        engine: 'Engine / Power',
        avionics: 'Avionics Suite',
        cruise: 'Cruise Speed',
        range: 'Max Range',
        fuel: 'Fuel & Control',
        role: 'Training Role',
      },
      items: [
        {
          id: 'da40ng',
          model: 'Diamond DA-40NG',
          category: 'Single-Engine Composite Trainer',
          count: '8 Aircraft',
          countNum: 8,
          engine: 'Austro Engine AE300 (168 hp Turbo Diesel)',
          avionics: 'Garmin G1000 NXi + GFC700 Autopilot',
          cruiseSpeed: '154 KTAS (285 km/h)',
          range: '1,341 km (724 NM)',
          fuel: 'Jet-A1 Fuel (Single-lever FADEC)',
          role: 'Core platform for PPL, Instrument Rating (IR), and CPL',
          image: IMAGES.heroDa40,
          imageAlt: 'Diamond DA-40NG single-engine trainer of Cheongju University FTC',
        },
        {
          id: 'da42vi',
          model: 'Diamond DA-42VI',
          category: 'Multi-Engine Composite Trainer',
          count: '1 Aircraft',
          countNum: 1,
          engine: 'Twin Austro Engine AE300 (2 × 168 hp)',
          avionics: 'Garmin G1000 NXi · Weather Radar · TKS De-Icing',
          cruiseSpeed: '197 KTAS (365 km/h)',
          range: '2,250 km (1,215 NM)',
          fuel: 'Jet-A1 Fuel (FADEC Digital Control)',
          role: 'Multi-Engine Rating (ME) & Commercial Airline Bridge',
          image: IMAGES.fleetDa42,
          imageAlt: 'Diamond DA-42VI twin-engine trainer of Cheongju University FTC',
        },
      ],
    },
    facilities: {
      heading: '03. Training Facilities & Runways',
      lead: 'Students train on full-scale international airport runways equipped with precision ILS approaches and radar ATC services.',
      imageCaption: 'Dedicated university flight hangar and 2,800 m international runway environment',
      tableHeaders: {
        airport: 'Airport Base',
        runway: 'Runway Designator',
        dimensions: 'Dimensions / Surface',
        navaids: 'Navigation & Approach Aids',
      },
      bases: [
        {
          id: 'rkjb',
          code: 'RKJB',
          name: 'Muan International Airport (Branch)',
          role: 'Dedicated Hangar · Primary Flight Line',
          address: 'Muan-gun, Jeollanam-do',
          runwayDim: '2,800 m × 45 m (Asphalt)',
          runwayHeading: 'RWY 01 / 19',
          navaids: 'ILS CAT-I/II · VOR/DME · PAPI · RNP Approaches',
          highlights: ['Dedicated hangar and ramp apron', 'Low commercial traffic enables continuous pattern & IFR sorties'],
        },
        {
          id: 'rktu',
          code: 'RKTU',
          name: 'Cheongju International Airport (Main)',
          role: 'Dual Runways · Central Korea Hub',
          address: 'Cheongju-si, Chungcheongbuk-do',
          runwayDim: '2,744 m × 60 m / 45 m',
          runwayHeading: 'RWY 06R/24L · 06L/24R',
          navaids: 'ILS CAT-I · TACAN · VOR/DME · Approach Radar',
          highlights: ['Dual-runway tower & joint civil-military ATC procedures', 'Direct connection to College of Aviation ground campus'],
        },
      ],
      supportSpacesTitle: 'Core Ground & Hangar Support Facilities',
      supportSpaces: [
        {
          title: 'Dedicated Hangar & Maintenance Bay',
          detail: 'Indoor aircraft parking and certified maintenance bays for scheduled 50/100-hour airframe and Austro diesel inspections.',
        },
        {
          title: 'Flight Briefing & Debriefing Rooms',
          detail: '1-on-1 instructor briefing rooms equipped with G1000 SD-card flight data replay and weather workstations.',
        },
        {
          title: 'Dispatch & Safety Monitoring Desk',
          detail: 'Real-time flight following, flight plan filing, NOTAM verification, and airport weather radar monitoring.',
        },
        {
          title: 'Cadet Study & Flight Prep Lounge',
          detail: 'Quiet procedure practice area supporting pre-flight chair flying, cross-country planning, and crew rest.',
        },
      ],
    },
    simulators: {
      heading: '04. Training Equipment & Simulators',
      lead: 'MOLIT Class-A certified Flight Training Devices (FTD) allow cadets to master abnormal emergencies, engine failures, and low-visibility ILS approaches before entering live airspace.',
      imageCaption: 'Garmin G1000 NXi Flight Training Device (FTD) with curved visual projection',
      certLabel: 'Certification',
      platformLabel: 'Simulated Platform',
      creditLabel: 'Loggable Credit',
      items: [
        {
          id: 'ftd-da40',
          name: 'DA-40NG Flight Training Device (FTD)',
          certification: 'MOLIT Class-A Certified FTD',
          platform: '1:1 Diamond DA-40NG Cockpit · Garmin G1000 NXi · 180° Curved Visual',
          creditHours: 'Maximum MOLIT-approved simulator hours credited toward PPL, IR & CPL',
          capabilities: [
            'High-resolution terrain & runway databases for Cheongju, Muan, Jeju, and Gimpo',
            'Real-time Instructor Operating Station (IOS) injection of engine, electrical & avionics failures',
            'Automated glidepath and localizer deviation recording for post-flight debrief',
          ],
        },
        {
          id: 'ftd-multi',
          name: 'Multi-Engine & IFR Procedure Trainer',
          certification: 'Instrument & Asymmetric Thrust Procedure Suite',
          platform: 'DA-42 Twin-Engine Avionics Layout · G1000 NXi Simulation',
          creditHours: 'Mandatory pre-flight procedural training for Multi-Engine Rating (ME)',
          capabilities: [
            'One-Engine-Inoperative (OEI) yaw management and Vmc recovery drills',
            'Holding patterns, SID/STAR navigation, and PBN/RNP instrument approaches',
          ],
        },
        {
          id: 'g1000-station',
          name: 'Garmin G1000 NXi Avionics Lab Stations',
          certification: 'Department & FTC Shared Avionics Trainers',
          platform: 'Multi-unit PFD/MFD Desktop Avionics Simulators',
          creditHours: 'Pre-flight FMS programming & navigation proficiency training',
          capabilities: [
            'Hands-on flight plan entry, VNAV vertical guidance, and GPS approach loading',
            'Reduces cockpit avionics workload prior to live aircraft sorties',
          ],
        },
      ],
    },
    curriculum: {
      heading: '05. Flight Training Curriculum',
      lead: 'Streamlined 4-stage airline pilot pipeline focusing strictly on flight proficiency, instrument precision, and commercial readiness without administrative bloat.',
      aircraftLabel: 'Equipment',
      hoursLabel: 'Training Scope',
      stages: [
        {
          step: '01',
          code: 'PPL',
          title: 'Private Pilot License',
          aircraft: 'DA-40NG + FTD',
          hours: '40+ Flight Hrs · 5 FTD Hrs',
          summary: 'Builds core stick-and-rudder mastery, solo confidence, and visual cross-country navigation.',
          outcomes: ['Normal & crosswind takeoffs/landings', 'First supervised solo flight', 'VFR cross-country navigation'],
        },
        {
          step: '02',
          code: 'IR',
          title: 'Instrument Rating',
          aircraft: 'DA-40NG + Class-A FTD',
          hours: '40 Instrument Hrs (FTD + Aircraft)',
          summary: 'Develops precision flight solely by reference to instruments in controlled IFR airspace.',
          outcomes: ['ILS, VOR & RNAV approaches', 'SID/STAR airway navigation', 'Unusual attitude & emergency IFR'],
        },
        {
          step: '03',
          code: 'CPL',
          title: 'Commercial Pilot License',
          aircraft: 'DA-40NG + DA-42VI',
          hours: '150–200 Total Cumulative Hrs',
          summary: 'Refines commercial tolerances, night operations, and multi-leg cross-country flight management.',
          outcomes: ['Commercial precision maneuvers', 'Night landings & night navigation', 'Crew Resource Management (CRM)'],
        },
        {
          step: '04',
          code: 'ME · CFI',
          title: 'Multi-Engine & Instructor Rating',
          aircraft: 'Diamond DA-42VI',
          hours: '10+ Twin Hrs · CFI Track',
          summary: 'Certifies twin-engine proficiency and opens pathways for graduates to instruct and build turbine-ready hours.',
          outcomes: ['Asymmetric thrust / OEI control', 'Weather radar & TKS anti-ice ops', 'CFI time-building airline pipeline'],
        },
      ],
    },
    airports: {
      heading: '06. Operating Airports & Training Environment',
      lead: 'Dual bases at Muan and Cheongju link seamlessly with major Korean coastal and inland airports for realistic cross-country experience.',
      filterAll: 'All Airports',
      filterBase: 'Home Bases',
      filterXc: 'Cross-Country Hubs',
      tableHeaders: {
        icao: 'ICAO',
        airport: 'Airport & Role',
        runway: 'Runway',
        time: 'From Muan',
        focus: 'Training Focus',
      },
      airports: [
        {
          icao: 'RKJB',
          name: 'Muan Int’l Airport (Branch Hub)',
          type: 'base',
          runway: '2,800m × 45m',
          flightTimeFromMuan: 'Home Base',
          trainingFocus: 'Pattern work, ILS CAT-I/II approaches, night & twin-engine ops',
        },
        {
          icao: 'RKTU',
          name: 'Cheongju Int’l Airport (Main Base)',
          type: 'base',
          runway: '2,744m × 60m / 45m',
          flightTimeFromMuan: '~50 min',
          trainingFocus: 'Initial PPL training & joint civil-military radar ATC',
        },
        {
          icao: 'RKPC',
          name: 'Jeju Int’l Airport',
          type: 'cross-country',
          runway: '3,180m × 45m',
          flightTimeFromMuan: '~45 min',
          trainingFocus: 'Overwater navigation, strong crosswinds & heavy airline traffic',
        },
        {
          icao: 'RKNY',
          name: 'Yangyang Int’l Airport',
          type: 'cross-country',
          runway: '2,500m × 45m',
          flightTimeFromMuan: '~1 hr 35 min',
          trainingFocus: 'Long-range mountain ridge crossing & east-coast weather ops',
        },
        {
          icao: 'RKJY',
          name: 'Yeosu Airport',
          type: 'cross-country',
          runway: '2,100m × 45m',
          flightTimeFromMuan: '~25 min',
          trainingFocus: 'Southern coastal pilotage & short-leg instrument approaches',
        },
        {
          icao: 'RKPS',
          name: 'Sacheon Airport',
          type: 'cross-country',
          runway: '2,743m × 45m',
          flightTimeFromMuan: '~35 min',
          trainingFocus: 'Multi-sector cross-country navigation & approach transitions',
        },
      ],
      environmentPoints: [
        {
          title: 'Low Congestion, High Sortie Efficiency',
          desc: 'Muan’s light commercial airline schedule minimizes ground holds, maximizing daily training sorties per aircraft.',
        },
        {
          title: 'Four-Season Coastal & Mountain Weather',
          desc: 'Exposure to sea breezes, inland fronts, and mountain corridors builds practical meteorological decision-making.',
        },
        {
          title: 'Major Terminal Control Area Integration',
          desc: 'Frequent operations into Cheongju and Jeju terminal airspace sharpen radio communications and traffic awareness.',
        },
      ],
    },
    staff: {
      heading: '07. Staff & Flight Instructor Organization',
      lead: 'Led by veteran Air Force and commercial airline captains alongside dedicated CFI/CFII instructors, licensed maintenance engineers, and flight dispatchers.',
      units: [
        {
          role: 'Director & Chief Flight Instructor',
          headcount: 'Executive Safety Leadership',
          responsibility: 'Oversees Safety Management System (SMS), MOLIT curriculum compliance, and stage checkrides.',
          qualification: 'ATP / Senior CFI Leadership Experience',
        },
        {
          role: 'Flight Instructor Corps (CFI / CFII / MEI)',
          headcount: '15–20 Active Instructors',
          responsibility: 'Delivers 1-on-1 flight and FTD instruction across PPL, IR, CPL, and ME tracks.',
          qualification: 'Military/Airline Veterans & CJU-Certified CFIs',
        },
        {
          role: 'Aircraft Maintenance Team',
          headcount: 'On-Site Certified Engineers',
          responsibility: 'Executes 50/100-hr inspections, Austro Diesel servicing, and G1000 avionics airworthiness.',
          qualification: 'MOLIT A&P License & Diamond Factory Training',
        },
        {
          role: 'Flight Dispatch & Operations Support',
          headcount: 'Cheongju & Muan Staff',
          responsibility: 'Manages daily flight scheduling, real-time tracking, weather/NOTAM briefings, and safety logs.',
          qualification: 'Aviation Dispatch & Safety Specialists',
        },
      ],
    },
    capacity: {
      heading: '08. Trainee Scale & Annual Training Capacity',
      lead: 'Calibrated cohort sizing matched to 9 aircraft and Class-A simulators prevents training backlogs and keeps graduation timelines on schedule.',
      metrics: [
        {
          label: 'Annual Department Intake',
          value: '36–40',
          unit: 'Cadets / Year',
          context: 'Selective intake in the Dept. of Aviation Operations',
        },
        {
          label: 'Active Flight Trainees',
          value: '120+',
          unit: 'Enrolled Cadets',
          context: 'Distributed across 3rd-year (Cheongju) & 4th-year (Muan) phases',
        },
        {
          label: 'Annual Flight Training Capacity',
          value: '6,000+ hrs',
          unit: 'Live Flight / Year',
          context: 'Backed by 2,500+ annual FTD simulator training hours',
        },
        {
          label: 'Instructor-to-Cadet Ratio',
          value: '1 : 4–5',
          unit: 'Dedicated Coaching',
          context: 'Ensures consistent 3–4 weekly flight slots per active trainee',
        },
      ],
      cohortBreakdownTitle: 'Base-by-Base Training Distribution',
      cohorts: [
        {
          group: '3rd-Year Foundation Cohort',
          base: 'Cheongju Main Base (RKTU)',
          focus: 'Aviation theory, FTD familiarization & PPL flight training',
          volume: '~36–40 Cadets',
        },
        {
          group: '4th-Year Advanced Cohort',
          base: 'Muan Branch (RKJB)',
          focus: 'Instrument Rating (IR), CPL & Multi-Engine (ME) completion',
          volume: '~36–40 Cadets',
        },
        {
          group: 'CFI & Airline Transition Track',
          base: 'Cheongju & Muan Combined',
          focus: 'Flight Instructor rating & structured hour-building',
          volume: 'Rolling Intake',
        },
      ],
    },
    footer: {
      brandTitle: 'Cheongju University Flight Training Center',
      portalText: 'Portal Domain: cflight-training.ac.kr',
      officialLinkLabel: 'Direct Link to Official Site: Cheongju University FTC (https://www.cju.ac.kr/043dic/index.do)',
      cheongjuAddr: 'Cheongju Main: 298 Daeseong-ro, Cheongwon-gu, Cheongju-si · Cheongju Int’l Airport',
      muanAddr: 'Muan Branch: 970-130 Gonghang-ro, Mangun-myeon, Muan-gun · Muan Int’l Airport',
      tel: 'Main Inquiry: +82-43-229-8114',
      copyright: '© Cheongju University Flight Training Center (ftc cheongju). Institutional Overview.',
    },
  },
  zh: {
    header: {
      brand: 'FTC Cheongju',
      navLinks: [
        { id: 'overview', label: '学院概况' },
        { id: 'fleet', label: '训练机队' },
        { id: 'facilities', label: '跑道设施' },
        { id: 'curriculum', label: '培训课程' },
      ],
      ctaLabel: '清州大学飞行教育院官网 ↗',
    },
    hero: {
      institutionLine: 'Cheongju University Flight Training Center · 韩国国土交通部指定专业飞行培训机构',
      domainTag: 'cflight-training.ac.kr',
      title: '清州大学飞行教育院',
      subtitle:
        '依托清州国际机场(RKTU)与务安国际机场(RKJB)双基地布局，配备钻石 DA-40NG 与 DA-42VI 玻璃座舱机队及“甲”级 FTD 飞行模拟器，系统培养符合民航标准的高素质飞行员。',
      primaryCta: '查看核心概览',
      secondaryCta: '前往清州大学飞行教育院官网',
      officialSitePrefix: '官方主页直连',
      officialSiteLabel: '清州大学飞行教育院官网 (cju.ac.kr/043dic)',
      kpis: [
        { value: '9架', label: '训练飞机规模', sub: 'DA-40NG 8架 · DA-42VI 1架' },
        { value: '2座机场', label: '双基地协同运行', sub: '清州(RKTU) · 务安(RKJB)' },
        { value: '2,800米', label: '务安分院主跑道', sub: '支持 ILS CAT-I/II 精密进近' },
        { value: '120名+', label: '在训学员规模', sub: '年均 6,000+ 小时飞行训练能力' },
      ],
    },
    sectionTabs: [
      { id: 'overview', label: '01. 概况与位置', shortLabel: '概况位置' },
      { id: 'fleet', label: '02. 机队配置', shortLabel: '训练机队' },
      { id: 'facilities', label: '03. 跑道与设施', shortLabel: '跑道设施' },
      { id: 'simulators', label: '04. 模拟训练器', shortLabel: '模拟器' },
      { id: 'curriculum', label: '05. 运营课程', shortLabel: '培训课程' },
      { id: 'airports', label: '06. 运行机场', shortLabel: '运行环境' },
      { id: 'staff', label: '07. 教官团队', shortLabel: '教官团队' },
      { id: 'capacity', label: '08. 规模与能力', shortLabel: '培训能力' },
    ],
    overview: {
      heading: '01. 飞行教育院概况与地理位置',
      lead: '清州大学飞行教育院成立于 2013 年，采用大学直营一体化飞行训练体系，将本科航空理论教育与符合民航标准的飞行实操深度融合。',
      establishedLabel: '成立与资质',
      establishedValue: '2013 年设立 · 韩国国土交通部指定专业飞行教育机构 (ATO)',
      authorityLabel: '运行基地',
      authorityValue: '清州本院（清州国际机场）& 务安分院（务安国际机场）',
      portalLabel: '指定域名',
      portalValue: 'cflight-training.ac.kr',
      officialDirectLabel: '清州大学飞行教育院',
      bases: [
        {
          code: 'RKTU · 本院',
          name: '清州本院（清州大学 · 清州国际机场）',
          tag: '理论教学 · 模拟器训练 · 初期飞行',
          address: '韩国忠清北道清州市清原区大成路 298（清州大学航空学院）/ 清州国际机场',
          description:
            '承担航空运行理论授课、FTD 模拟机前期程序训练，以及大三学员私照（PPL）基础飞行阶段训练。',
        },
        {
          code: 'RKJB · 分院',
          name: '务安分院（务安国际机场飞行训练中心）',
          tag: '仪表 · 商照 · 双发强化基地',
          address: '韩国全罗南道务安郡望云面空港路 970-130（务安国际机场内）',
          description:
            '在商业航班密度较低、跑道与导航设备完善的务安国际机场建有专用机库与讲评大楼，集中开展大四仪表、商照及双发高阶飞行训练。',
        },
      ],
    },
    fleet: {
      heading: '02. 拥有飞机机型与数量',
      lead: '全机队统一采用奥地利钻石（Diamond）复合材料飞机与 Garmin G1000 NXi 数字玻璃座舱，显著提升学员向喷气客机过渡的适应效率。',
      totalSummary: '共 9 架训练飞机 · Jet-A1 航空煤油柴油发动机 · 全线配备 Garmin G1000 NXi 综合航电',
      specLabels: {
        count: '机队数量',
        engine: '发动机型号',
        avionics: '航电系统',
        cruise: '巡航速度',
        range: '最大航程',
        fuel: '燃油与控制',
        role: '主要培训科目',
      },
      items: [
        {
          id: 'da40ng',
          model: 'Diamond DA-40NG',
          category: '单发复合材料教练机',
          count: '8 架',
          countNum: 8,
          engine: 'Austro Engine AE300（168 马力涡轮柴油）',
          avionics: 'Garmin G1000 NXi + GFC700 自动驾驶仪',
          cruiseSpeed: '154 KTAS（约 285 km/h）',
          range: '1,341 km（724 海里）',
          fuel: 'Jet-A1 航空煤油（单杆 FADEC 控制）',
          role: '私用执照（PPL）· 仪表等级（IR）· 商用执照（CPL）主力机型',
          image: IMAGES.heroDa40,
          imageAlt: '清州大学飞行教育院 Diamond DA-40NG 单发训练机',
        },
        {
          id: 'da42vi',
          model: 'Diamond DA-42VI',
          category: '双发复合材料教练机',
          count: '1 架',
          countNum: 1,
          engine: 'Twin Austro Engine AE300（2 × 168 马力）',
          avionics: 'Garmin G1000 NXi · 气象雷达 · TKS 除冰系统',
          cruiseSpeed: '197 KTAS（约 365 km/h）',
          range: '2,250 km（1,215 海里）',
          fuel: 'Jet-A1 航空煤油（FADEC 全权数字控制）',
          role: '多发等级（ME）· 商用双发强化 · 航司衔接训练',
          image: IMAGES.fleetDa42,
          imageAlt: '清州大学飞行教育院 Diamond DA-42VI 双发训练机',
        },
      ],
    },
    facilities: {
      heading: '03. 飞行教学设施与跑道',
      lead: '充分利用清州国际机场与务安国际机场的国际线级别跑道与精密进近设施，让学员在真实民航管制环境中开展训练。',
      imageCaption: '务安国际机场飞行教育院专用机库与 2,800 米跑道全景',
      tableHeaders: {
        airport: '训练机场',
        runway: '跑道编号',
        dimensions: '跑道尺寸 / 道面',
        navaids: '助航与精密进近设备',
      },
      bases: [
        {
          id: 'rkjb',
          code: 'RKJB',
          name: '务安国际机场（务安分院）',
          role: '专用机库 · 核心飞行基地',
          address: '全罗南道务安郡',
          runwayDim: '2,800 m × 45 m（沥青）',
          runwayHeading: 'RWY 01 / 19',
          navaids: 'ILS CAT-I/II · VOR/DME · PAPI · RNP 进近',
          highlights: ['拥有独立机库与专用停机坪', '商业航班干扰少，适合高密度起落与仪表进近训练'],
        },
        {
          id: 'rktu',
          code: 'RKTU',
          name: '清州国际机场（清州本院）',
          role: '双跑道 · 中部训练基地',
          address: '忠清北道清州市',
          runwayDim: '2,744 m × 60 m / 45 m',
          runwayHeading: 'RWY 06R/24L · 06L/24R',
          navaids: 'ILS CAT-I · TACAN · VOR/DME · 雷达管制',
          highlights: ['在军民合用双跑道空域内熟练掌握标准管制程序', '与清州大学航空学院教学楼紧密联动'],
        },
      ],
      supportSpacesTitle: '核心保障与地面教学空间',
      supportSpaces: [
        {
          title: '专用飞机机库与维修车间',
          detail: '可停放多架 DA-40NG 与 DA-42VI，并配备执行 50/100 小时定检及发动机维护的专用维修工位。',
        },
        {
          title: '飞行讲评室（Briefing / Debriefing）',
          detail: '结合气象雷达、航行通告（NOTAM）与 G1000 飞行数据回放系统，开展教官一对一飞行讲评。',
        },
        {
          title: '运行调度与气象监控室',
          detail: '实施全天候飞机动态追踪、飞行计划申报及全国机场航路气象实时监测。',
        },
        {
          title: '学员程序练习与备勤休息室',
          detail: '支持飞行前座舱程序演练（Chair Flying）、转场航线规划与机组休整。',
        },
      ],
    },
    simulators: {
      heading: '04. 教学设备与飞行模拟器',
      lead: '配备获韩国国土交通部认证的“甲”级飞行训练器（FTD），在零风险地面环境中反复演练发动机故障、仪表进近与恶劣气象处置。',
      imageCaption: '搭载 Garmin G1000 NXi 玻璃座舱与曲面视景系统的 FTD 模拟训练器',
      certLabel: '认证等级',
      platformLabel: '模拟机型与系统',
      creditLabel: '可计入飞行时长',
      items: [
        {
          id: 'ftd-da40',
          name: 'DA-40NG 飞行训练器（FTD）',
          certification: '韩国国土交通部“甲”级模拟机认证',
          platform: '1:1 复刻 Diamond DA-40NG 座舱 · Garmin G1000 NXi · 180° 曲面视景',
          creditHours: '可按法规上限折算计入 PPL、IR 及 CPL 训练时长',
          capabilities: [
            '内置清州、务安、济州、金浦等韩国主要国际机场高精度地形与跑道模型',
            '教官控制台（IOS）可实时注入发动机停机、电气故障及低能见度特情',
            '自动记录下滑道与航向道进近偏差，用于飞行后精准复盘',
          ],
        },
        {
          id: 'ftd-multi',
          name: '双发与仪表程序模拟训练设备',
          certification: '仪表飞行及单发失效非对称推力专项训练',
          platform: '兼容 DA-42 双发仪表构型 · G1000 NXi 航电模拟',
          creditHours: '多发等级（ME）及复杂仪表程序（IFR）前置必训单元',
          capabilities: [
            '强化单发失效（OEI）偏航控制与最小操纵速度（Vmc）处置流程',
            '高频演练等待航线（Holding）、SID/STAR 离进场及 PBN/RNP 进近程序',
          ],
        },
        {
          id: 'g1000-station',
          name: 'Garmin G1000 NXi 航电地面实训站',
          certification: '航空运行系与飞行教育院共用航电平台',
          platform: '多台套 PFD/MFD 双屏桌面航电训练台',
          creditHours: '上机前 FMS 航路输入与导航操作专项训练',
          capabilities: [
            '熟练掌握飞行计划编排、VNAV 垂直导航与 GPS 进近页面切换',
            '有效降低实机飞行时的座舱操作负荷',
          ],
        },
      ],
    },
    curriculum: {
      heading: '05. 飞行教育运营课程',
      lead: '精简繁琐行政环节，围绕航空公司副驾驶入职要求构建清晰高效的四阶段飞行员培养路线。',
      aircraftLabel: '执飞机型',
      hoursLabel: '核心训练周期',
      stages: [
        {
          step: '01',
          code: 'PPL',
          title: '私用飞行员执照课程',
          aircraft: 'DA-40NG + FTD',
          hours: '实机 40小时+ · 模拟机 5小时',
          summary: '夯实空气动力操控、首次单飞（Solo）及目视转场（VFR）基础能力。',
          outcomes: ['标准起降与侧风修正', '首次单飞考核', '目视转场领航飞行'],
        },
        {
          step: '02',
          code: 'IR',
          title: '仪表飞行等级课程',
          aircraft: 'DA-40NG + 甲级 FTD',
          hours: '仪表训练 40小时（机地结合）',
          summary: '在无外部目视参考条件下，完全依赖航电仪表执行穿云飞行与精密进近。',
          outcomes: ['ILS / VOR / RNAV 进近', 'SID/STAR 航路飞行', '复杂姿态改出与应急程序'],
        },
        {
          step: '03',
          code: 'CPL',
          title: '商用飞行员执照课程',
          aircraft: 'DA-40NG + DA-42VI',
          hours: '累计总飞行 150–200小时',
          summary: '提升高难度商业机动精度、夜间起降与长距离多机场转场决策水平。',
          outcomes: ['商用高精度机动飞行', '夜间起落与夜航转场', '机组资源管理（CRM）'],
        },
        {
          step: '04',
          code: 'ME · CFI',
          title: '多发等级 · 飞行教员课程',
          aircraft: 'Diamond DA-42VI',
          hours: '双发 10小时+ / 教员专项',
          summary: '掌握双发飞机运行资格，优秀毕业生可考取教员执照（CFI）留校带飞积累工时。',
          outcomes: ['双发单发失效（OEI）控制', '气象雷达与除冰运行', 'CFI 留院带飞与航司输送'],
        },
      ],
    },
    airports: {
      heading: '06. 主要运行机场与飞行训练环境',
      lead: '以清州、务安两大基地为核心，辐射济州、襄阳、丽水、泗川等机场，构成覆盖海岛、海岸与山岳地形的立体转场训练网络。',
      filterAll: '全部运行机场',
      filterBase: '核心训练基地',
      filterXc: '主要转场机场',
      tableHeaders: {
        icao: 'ICAO',
        airport: '机场名称与定位',
        runway: '跑道规模',
        time: '务安出发航时',
        focus: '主要训练科目',
      },
      airports: [
        {
          icao: 'RKJB',
          name: '务安国际机场（务安分院）',
          type: 'base',
          runway: '2,800m × 45m',
          flightTimeFromMuan: '主训练基地',
          trainingFocus: '起落航线、ILS 精密进近、夜航及双发集中训练',
        },
        {
          icao: 'RKTU',
          name: '清州国际机场（清州本院）',
          type: 'base',
          runway: '2,744m × 60m / 45m',
          flightTimeFromMuan: '约 50 分钟',
          trainingFocus: '大三初期 PPL 实操与军民合用管制空域运行',
        },
        {
          icao: 'RKPC',
          name: '济州国际机场',
          type: 'cross-country',
          runway: '3,180m × 45m',
          flightTimeFromMuan: '约 45 分钟',
          trainingFocus: '跨海飞行、强侧风着陆及高密度商业航班协同进近',
        },
        {
          icao: 'RKNY',
          name: '襄阳国际机场',
          type: 'cross-country',
          runway: '2,500m × 45m',
          flightTimeFromMuan: '约 1小时35分',
          trainingFocus: '飞越太白山脉长距离转场领航及东海岸气象应对',
        },
        {
          icao: 'RKJY',
          name: '丽水机场',
          type: 'cross-country',
          runway: '2,100m × 45m',
          flightTimeFromMuan: '约 25 分钟',
          trainingFocus: '南海岸目视地标领航与短途仪表进近衔接',
        },
        {
          icao: 'RKPS',
          name: '泗川机场',
          type: 'cross-country',
          runway: '2,743m × 45m',
          flightTimeFromMuan: '约 35 分钟',
          trainingFocus: '多航段转场飞行（Cross-Country）及空域过渡程序',
        },
      ],
      environmentPoints: [
        {
          title: '机场空域宽松，单日架次利用率高',
          desc: '务安基地商业航班干扰极低，大幅减少地面等待时间，保障学员高效完成每日飞行架次。',
        },
        {
          title: '四季分明、海岸与山岳复合气象',
          desc: '学员可同步历练西海岸海风与内陆山岳气流，培养贴近真实航线运营的气象研判能力。',
        },
        {
          title: '大型进近管制空域实战适应',
          desc: '高频进出清州、济州终端管制区，系统提升无线电陆空通话（RT）与高密度空域感知能力。',
        },
      ],
    },
    staff: {
      heading: '07. 职员与飞行教官团队构成',
      lead: '由空军及民航资深机长领衔，结合专业飞行教官团队、持证机务维修师与运行调度人员，构建全流程飞行安全保障体系。',
      units: [
        {
          role: '飞行教育院长与首席飞行教官',
          headcount: '教学与安全总负责人',
          responsibility: '统筹安全管理体系（SMS）、国土交通部培训大纲合规及各阶段飞行考试把关（Checkride）。',
          qualification: '具备航线运输执照 / 资深首席教官资历',
        },
        {
          role: '专职飞行教官团（CFI / CFII / MEI）',
          headcount: '15–20 名在编教官',
          responsibility: '负责 PPL、IR、CPL、ME 实机带飞、FTD 模拟机指导及飞行前后一对一安全讲评。',
          qualification: '资深军转/民航教官及本校培养的优秀持证教官',
        },
        {
          role: '航空机务维修团队',
          headcount: '基地常驻持证机务',
          responsibility: '执行 DA-40NG / DA-42VI 50/100 小时定期检修、Austro 柴油发动机与航电系统适航维护。',
          qualification: '持有韩国航空维修师执照及钻石机型原厂培训认证',
        },
        {
          role: '运行调度与教学保障团队',
          headcount: '清州·务安两地常驻',
          responsibility: '统筹每日飞行排班、实时航迹监控、NOTAM 与气象发布及学员日常运行安全管理。',
          qualification: '专业飞行签派与航空安全运行管理人才',
        },
      ],
    },
    capacity: {
      heading: '08. 在训学员规模与年度培训能力',
      lead: '根据 9 架飞机与“甲”级模拟机运力科学核定招生与实训配比，有效避免排队积压，保障按期毕业与取照。',
      metrics: [
        {
          label: '航空运行系年度招生规模',
          value: '36–40名',
          unit: '每学年',
          context: '精英化小班选拔与分年级阶梯式培养',
        },
        {
          label: '常驻飞行实操学员规模',
          value: '120名+',
          unit: '大三·大四及培训生',
          context: '清州本院（初期）与务安分院（高阶）科学分流',
        },
        {
          label: '年度实机飞行培训能力',
          value: '6,000小时+',
          unit: '年总飞行小时',
          context: '配套年均 2,500+ 小时 FTD 模拟机训练支撑',
        },
        {
          label: '教官与学员指导配比',
          value: '1 : 4–5',
          unit: '专属带飞比例',
          context: '确保在训学员每周稳定获得 3–4 次实飞训练机会',
        },
      ],
      cohortBreakdownTitle: '分基地与分阶段学员分布体系',
      cohorts: [
        {
          group: '大三飞行入门阶段',
          base: '清州本院 (RKTU)',
          focus: '航空理论课程 + FTD 地面预习 + PPL 私用执照飞行',
          volume: '约 36–40 名',
        },
        {
          group: '大四高阶取照阶段',
          base: '务安分院 (RKJB)',
          focus: '仪表等级（IR）+ 商用执照（CPL）+ 多发等级（ME）',
          volume: '约 36–40 名',
        },
        {
          group: '飞行教员及工时积累阶段',
          base: '清州 · 务安联动',
          focus: '考取飞行教员执照（CFI）并留院带飞积累航司录用工时',
          volume: '滚动选拔',
        },
      ],
    },
    footer: {
      brandTitle: '清州大学飞行教育院 · Cheongju University Flight Training Center',
      portalText: '网站指定域名：cflight-training.ac.kr',
      officialLinkLabel: '直达官方主页：清州大学飞行教育院 (https://www.cju.ac.kr/043dic/index.do)',
      cheongjuAddr: '清州本院：韩国忠清北道清州市清原区大成路 298（清州大学）· 清州国际机场',
      muanAddr: '务安分院：韩国全罗南道务安郡望云面空港路 970-130（务安国际机场内）',
      tel: '咨询电话：+82-43-229-8114',
      copyright: '© Cheongju University Flight Training Center (ftc cheongju). Institutional Overview.',
    },
  },
};
