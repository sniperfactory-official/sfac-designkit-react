interface SFACPlayerProps {
    url: string; // 미디어 url 받아올 때 값
    playing : boolean,   // 미디어 재생 중인지를 나타내는 불리언 값
    controls: boolean, // 미디어 재생 컨트롤러를 보여줄지를 나타내는 불리언 값
    volume: number, // 미디어의 볼륨을 나타내는 숫자 값
    muted: boolean,  // 미디어의 음소거 여부를 나타내는 불리언 값
    playbackRate: number,  // 미디어의 재생 속도를 나타내는 숫자 값
    width: ([string, number]),  // 미디어 플레이어의 가로 크기를 나타내는 문자열 또는 숫자 값
    height: ([string, number]),  // 미디어 플레이어의 세로 크기를 나타내는 문자열 또는 숫자 값 -- 추후 하나 선택시 수정
    progressInterval: number ,    // 미디어의 진행 상태를 업데이트하는 간격을 나타내는 숫자 값 (밀리초 단위)
    pip: boolean,   // Picture-in-Picture 모드를 사용할지를 나타내는 불리언 값
    stopOnUnmount: boolean,   // 컴포넌트가 언마운트될 때 미디어 재생을 중지할지를 나타내는 불리언 값
    playIcon?: Node,     // 미디어 플레이어의 재생 아이콘으로 React 노드를 받음
    fallback?: Node,   // 미디어를 재생할 수 없을 때 대체로 사용될 React 노드를 받음
    oEmbedUrl: string,   // URL을 oEmbed 형식으로 변환하는 데 사용되는 문자열
    wrapper: string,   // 미디어 플레이어를 감싸는 컨테이너 엘리먼트를 정의하는 문자열 또는 함수 또는 `{ render: func.isRequired }` 형태의 객체
  
  }
  
  
  // 빈 함수(noop)를 정의하여 기본 이벤트 핸들러로 사용함
  const noop = () => {}
  
  // 컴포넌트의 기본 속성값을 정의한 객체 (defaultProps)
  export const defaultProps = {
    // 미디어가 재생 중이지 않도록 기본값으로 설정
    playing: false,
    // 미디어를 반복 재생하지 않도록 기본값으로 설정
    loop: false,
    // 미디어 재생 컨트롤러를 보여주지 않도록 기본값으로 설정
    controls: false,
    // 볼륨 기본값은 null로 설정하여 미디어의 기본 볼륨 값을 사용하도록 함
    volume: null,
    // 음소거를 사용하지 않도록 기본값으로 설정
    muted: false,
    // 미디어의 재생 속도 기본값은 1로 설정
    playbackRate: 1,
    // 미디어 플레이어의 가로 크기 기본값은 '640px'로 설정
    width: '640px',
    // 미디어 플레이어의 세로 크기 기본값은 '360px'로 설정
    height: '360px',
    // 스타일 기본값은 빈 객체로 설정
    style: {},
    // 미디어의 진행 상태를 업데이트하는 간격 기본값은 1000ms(1초)로 설정
    progressInterval: 1000,
    // 모바일 기기에서 인라인 재생 사용하지 않도록 기본값으로 설정
    playsinline: false,
    // Picture-in-Picture 모드를 사용하지 않도록 기본값으로 설정
    pip: false,
    // 컴포넌트가 언마운트될 때 미디어 재생을 중지하도록 기본값으로 설정
    stopOnUnmount: true,
    // 미디어 플레이어의 경량 버전을 사용하지 않도록 기본값으로 설정
    light: false,
    // 미디어를 재생할 수 없을 때 대체로 사용할 React 노드는 기본값으로 null로 설정
    fallback: null,
    // 미디어 플레이어를 감싸는 컨테이너 엘리먼트의 기본값은 'div'로 설정
    wrapper: 'div',
    // 미디어 미리보기 표시에 사용되는 탭 인덱스 기본값은 0으로 설정
    previewTabIndex: 0,
    // URL을 oEmbed 형식으로 변환하는 데 사용되는 문자열 기본값은 'https://noembed.com/embed?url={url}'로 설정
    oEmbedUrl: 'https://noembed.com/embed?url={url}',
  
    // 빈 함수(noop)를 기본값으로 설정하여 기본 이벤트 핸들러로 사용함
    onReady: noop,
    onStart: noop,
    onPlay: noop,
    onPause: noop,
    onBuffer: noop,
    onBufferEnd: noop,
    onEnded: noop,
    onError: noop,
    onDuration: noop,
    onSeek: noop,
    onPlaybackRateChange: noop,
    onPlaybackQualityChange: noop,
    onProgress: noop,
    onClickPreview: noop,
    onEnablePIP: noop,
    onDisablePIP: noop
  }
  

  export default SFACPlayerProps; 