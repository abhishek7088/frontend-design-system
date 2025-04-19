// src/stories/colors.stories.ts
import type { Meta } from '@storybook/react';
import { colors } from '../themes/colors';

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;

export const ColorPalette = () => (
  <div style={{ display: 'grid', gap: '1rem' }}>
    {Object.entries(colors).map(([name, value]) => (
      <div key={name}>
        <h3>{name}</h3>
        {typeof value === 'string' ? (
          <ColorSwatch name={name} value={value} />
        ) : (
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {Object.entries(value).map(([shade, shadeValue]) => (
              <ColorSwatch
                key={`${name}-${shade}`}
                name={`${name}-${shade}`}
                value={shadeValue}
              />
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
);

const ColorSwatch = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
    <div
      style={{
        width: '3rem',
        height: '3rem',
        backgroundColor: value,
        border: '1px solid #ddd',
        borderRadius: '4px',
      }}
    />
    <div>
      <div>{name}</div>
      <div style={{ fontSize: '0.8rem', color: '#666' }}>{value}</div>
    </div>
  </div>
);
