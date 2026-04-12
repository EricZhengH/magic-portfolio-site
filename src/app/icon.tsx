import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const size = {
  height: 32,
  width: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#176d58',
          color: '#ffffff',
          display: 'flex',
          fontSize: 15,
          fontWeight: 800,
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        HZ
      </div>
    ),
    size,
  );
}
